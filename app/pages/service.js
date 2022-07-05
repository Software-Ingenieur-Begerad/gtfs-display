import React, { useState } from 'react';
import axios from 'axios';
import ServiceTable from '../components/service-table';
import FormValue from '../components/form-value';
import Loading from '../components/loading';
import ChartBar from '../components/chart-bar';
import ChartLine from '../components/chart-line';
import GtfsService from '../utils/gtfs-service';
import config from '../config';
const Service = () => {
    /*store route as string*/
    const [route, setRoute] = useState('');
    const [render, setRender] = useState(false);
    const [loading, setLoading] = useState(false);
    const [objService, setObjService] = useState({});
    const [time, setTime] = useState([]);
    const [trip, setTrip] = useState([]);

    /*fetch objService in a JavaScript function*/
    const getObjService = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            let url = `${config.API}servicedays?routeshortname=${route}`;
            setLoading(true);
            const objService = await axios.get(url);
            setLoading(false);
            setRender(true);

            /*set state*/
            setObjService(objService.data);
            const aryTripCount = GtfsService.getAryTripCount(objService);
            setTrip(aryTripCount);
            const aryTime = GtfsService.getAryTime(objService);
            const aryDate = aryTime.map((time) => new Date(time).toDateString());
            setTime(aryDate);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    const handleSubmit = () => {
        event.preventDefault();
        getObjService();
    };

    const handleChange = (e) => {
        setRoute(e.target.value);
    };

    /*element representing user-defined React component*/
    const msgTable = <ServiceTable render={render} service={objService} />;
    const bar = <ChartBar route={route} time={time} trip={trip} />;
    const line = <ChartLine route={route} time={time} trip={trip} />;

    return (
        <>
            <FormValue
                value={route}
                valueName={'route'}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
            <Loading loading={loading} />
            <div
                style={{
                    height: '500px',
                    width: '900px'
                }}
            >
                {bar}
            </div>
            <div
                style={{
                    height: '500px',
                    width: '900px'
                }}
            >
                {line}
            </div>
            {msgTable}
        </>
    );
};
export default Service;
