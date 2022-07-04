import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './trips-table-entry';
import Head from './trips-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TripsTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const handleAryData = () => {
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                //console.log('aryData index: ' + index);
                return (
                    <Entry
                        routeId={item.route_id}
                        serviceId={item.service_id}
                        tripId={item.trip_id}
			tripHeadsign={item.trip_headsign}
			tripShortName={item.trip_short_name}
			directionId={item.direction_id}
			blockId={item.block_id}
			shapeId={item.shape_id}
			wheelchairAccessibel={item.wheechair_accessible}
			bikesAllowed={item.bikes_allowed}
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
TripsTable.propTypes = {
    aryData: PropTypes.array
};
export default TripsTable;
