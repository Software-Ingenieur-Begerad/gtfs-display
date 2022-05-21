import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ServiceChart = () => {
    const [graph, setGraph] = useState({
        labels: [],
        data: []
    });

    const graphData = [
        {
            label: 'React',
            value: 12
        },
        {
            label: 'Vue',
            value: 19
        },
        {
            label: 'Angular',
            value: 3
        }
    ];

    useEffect(() => {
        const labels = [];
        const data = [];

        graphData?.map((v) => {
            labels.push(v?.label);
            data.push(v?.value);
        });

        setGraph({
            labels: labels,
            data: data
        });
    }, []);

    const data = {
        labels: graph.labels,
        datasets: [
            {
                label: '# of Votes',
                data: graph.data,
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
                <h3>React Line Chart Example - CodeCheef </h3>
                <div style={{ height: '300px', width: '300px', margin: '0 auto' }}>
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
};

export default ServiceChart;
