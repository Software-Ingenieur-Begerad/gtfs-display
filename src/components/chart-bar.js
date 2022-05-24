import React from 'react';
import PropTypes from 'prop-types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
/* destructure props*/
const ChartBarVertical = ({ time, trip }) => {
    const data = {
        labels: time,
        datasets: [
            {
                label: 'trips of route #411 //TODO',
                data: trip,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
                text: 'Bar chart of route # //TODO'
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
            <div className="ChartBar">
                <p>Bar Chart</p>
                <div
                    style={{
                        height: '300px',
                        width: '900px'
                    }}
                >
                    <Bar data={data} options={options} />
                </div>
            </div>
        </>
    );
};
ChartBarVertical.propTypes = {
    time: PropTypes.array,
    trip: PropTypes.array
};
export default ChartBarVertical;
