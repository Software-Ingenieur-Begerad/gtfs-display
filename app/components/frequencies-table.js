import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './frequencies-table-entry';
import Head from './frequencies-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function FrequenciesTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const handleAryData = () => {
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                //console.log('aryData index: ' + index);
                return (
                    <Entry
			tripId={item.trip_id}
			startTime={item.start_time}
			endTime={item.end_time}
			headwaySecs={item.headway_secs}
			exactTimes={item.exact_times}
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
FrequenciesTable.propTypes = {
    aryData: PropTypes.array
};
export default FrequenciesTable;
