import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart } from './chart';

/*the simplest way to define a component is to write a JavaScript function*/
function ServiceTable () {
    /*import useState hook and create variable*/
    /*initialise as empty object*/
    const [chartData, setChartData] = useState({});

    /*fetch msgs in a JavaScript function*/
    const getData = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const res = await axios.get('https://api.coincap.io/v2/assets/?limit=5');
            const data = res.data.json();
            /*set state*/
            setChartData({
                labels: data.data.map((crypto) => crypto.name),
                datasets: [
                    {
                        label: 'Price in USD',
                        data: data.data.map((crypto) => crypto.priceUsd),
                        backgroundColor: [
                            '#ffbb11',
                            '#ecf0f1',
                            '#50AF95',
                            '#f3ba2f',
                            '#2a71d0'
                        ]
                    }
                ]
            });
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getData();

        /*update msgs periodically*/
        const interval = setInterval(() => {
            getData();
        }, 1000);

        /*clear interval when the user navigates to another page*/
        return () => clearInterval(interval);

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);

    /*element representing user-defined React component*/
    const chart = <BarChart chartData={chartData} />;

    return <>{chart}</>;
}

export default ServiceTable;
