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
const ChartBarVertical = ({ route, time, trip }) => {
    const data = {
        labels: time,
        datasets: [
            {
                label: `trip count of route ${route}`,
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
                text: `trip count of route ${route}`
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
    trip: PropTypes.array,
    route: PropTypes.string
};
export default ChartBarVertical;
