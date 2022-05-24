import React from 'react';
import PropTypes from 'prop-types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement
);
/* destructure props*/
const ChartLine = ({ time, trip }) => {
    const data = {
        labels: time,
        datasets: [
            {
                label: 'trips of route #411 //TODO',
                data: trip,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)'
            }
        ]
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Line chart of route #411 //TODO'
            }
        },
        scales: {
            y: {
                ticks: {
                    max: 300,
                    min: 0,
                    stepSize: 10
                },
                scaleLabel: {
                    display: false
                }
            }
        }
    };
    return (
        <>
            <div className="ChartLine">
                <p>Line Chart</p>
                <div
                    style={{
                        height: '300px',
                        width: '900px'
                    }}
                >
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
};
ChartLine.propTypes = {
    time: PropTypes.array,
    trip: PropTypes.array
};
export default ChartLine;
