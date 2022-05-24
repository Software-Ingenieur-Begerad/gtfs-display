import React, { useState } from 'react';
import axios from 'axios';
import FormValue from '../components/form-value';
import Loading from '../components/loading';
import GtfsService from '../utils/gtfs-service';
//TODO Whats the difference in importing with or without {}?
import ChartBar from '../components/chart-bar';
//TODO import ChartBarBeta from '../components/chart-bar-beta';
import ChartLine from '../components/chart-line';

const Service = () => {
    /*import useState hook and create variable*/
    const [route, setRoute] = useState('');
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState([]);
    const [trip, setTrip] = useState([]);

    /*fetch res in a JavaScript function*/
    const getRes = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            let url = `https://soll.vbn.de/gtfs/servicedays?routeshortname=${route}`;
            setLoading(true);
            const res = await axios.get(url);
            setLoading(false);

            const aryTripCount = GtfsService.getAryTripCount(res);
            setTrip(aryTripCount);
            //console.log('aryTripCount len: ' + aryTripCount.length);
            //console.log('aryTripCount [0]: ' + aryTripCount[0]);

            const aryTime = GtfsService.getAryTime(res);
            setTime(aryTime);
            //console.log('aryTime len: ' + aryTime.length);
            //console.log('aryTime [0]: ' + aryTime[0]);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    const handleSubmit = () => {
        event.preventDefault();
        getRes();
    };

    const handleChange = (e) => {
        setRoute(e.target.value);
    };

    /*element representing user-defined React component*/
    const bar = <ChartBar time={time} trip={trip} />;
    //TODO const barBeta = <ChartBarBeta time={time} trip={trip} />;
    const line = <ChartLine time={time} trip={trip} />;

    return (
        <>
            <div>
                <Loading loading={loading} />
            </div>
            <div>
                <FormValue
                    value={route}
                    valueName={'route'}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />
            </div>
            <div />
            <div
                style={{
                    height: '600px',
                    width: '900px'
                }}
            >
                <p>Bar Chart</p>
                <p>{bar}</p>
            </div>
            <div
                style={{
                    height: '600px',
                    width: '900px'
                }}
            >
                <p>Line Chart</p>

                <p>{line}</p>
            </div>
        </>
    );
};
export default Service;
