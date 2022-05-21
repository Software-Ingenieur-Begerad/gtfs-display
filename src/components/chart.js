import React from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

/* destructure chartData from props*/
export const BarChart = ({ chartData }) => {
    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'Services'
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }
                }}
            />
        </div>
    );
};

BarChart.propTypes = {
    chartData: PropTypes.object
};
