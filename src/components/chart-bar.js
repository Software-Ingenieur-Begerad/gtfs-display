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

/* destructure chartData from props*/
const ChartBarVertical = ({ time, trip }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Foo: Chart.js Bar Chart'
            }
        }
    };

    const data = {
        labels: time,
        datasets: [
            {
                label: 'Bar: Dataset 1',
                data: trip,
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }
        ]
    };

    return <Bar options={options} data={data} />;
};

ChartBarVertical.propTypes = {
    time: PropTypes.array,
    trip: PropTypes.array
};

export default ChartBarVertical;
