import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import PropTypes from 'prop-types';
class ChartBar extends React.Component {
    constructor (props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount () {
        this.myChart = new Chart(this.canvasRef.current, {
            type: 'bar',
            options: {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                min: 0,
                                max: 100
                            }
                        }
                    ]
                }
            },
            data: {
                labels: this.props.time,
                datasets: [
                    {
                        label: 'this.props.title',
                        data: this.props.trip,
                        backgroundColor: 'rgb(255, 99, 132)'
                    }
                ]
            }
        });
    }
    componentDidUpdate () {
    //TODO this.myChart.data.labels = this.props.data.map(d => d.label);
        this.myChart.data.labels = this.props.time;
        //TODO this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.data.datasets[0].data = this.props.trip;
        this.myChart.update();
    }

    render () {
        return <canvas ref={this.canvasRef} />;
    }
}

ChartBar.propTypes = {
    time: PropTypes.array,
    trip: PropTypes.array,
    render: PropTypes.bool
};

export default ChartBar;
