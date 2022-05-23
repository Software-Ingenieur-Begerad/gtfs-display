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

const ChartLine = (props) => {
    const data = {
        labels: props.time,
        datasets: [
            {
                label: 'trips of route #411',
                data: props.trip,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)'
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <>
            <div className="App">
                <h3>React Line Chart Example</h3>
                <div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
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
