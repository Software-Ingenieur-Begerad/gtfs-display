import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './stops-table-entry';
import Head from './stops-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function StopsTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const handleAryData = () => {
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                //console.log('aryData index: ' + index);
                return (
                    <Entry
                        stopId={item.stop_id}
                        stopCode={item.stop_code}
                        stopName={item.stop_name}
                        stopDesc={item.stop_desc}
                        stopLat={item.stop_lat}
                        stopLon={item.stop_lon}
                        locationType={item.location_type}
			parentStation={item.parent_station}
			wheelchairBoarding={item.wheelchair_boarding}
			platformCode={item.platform_code}
			zoneId={item.zone_id}
                        key={index}
                    />
                );
            });
        }
    };
    /*return a React element*/
    return (
        <>
            <Table striped bordered hover size="sm" variant="dark" responsive>
                <thead>
                    <Head />
                </thead>
                <tbody>{handleAryData()}</tbody>
            </Table>
        </>
    );
}
StopsTable.propTypes = {
    aryData: PropTypes.array
};
export default StopsTable;
