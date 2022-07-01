import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './routes-table-entry';
import Head from './routes-table-head';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function RoutesTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const handleAryData = () => {
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                //console.log('aryData index: ' + index);
                return (
                    <Entry
			routeId={item.route_id}
			agencyId={item.agency_id}
			routeShortName={item.route_short_name}
			routeLongName={item.route_long_name}
			routeType={item.route_type}
			routeColor={item.route_color}
			routeTextColor={item.route_text_color}
			routeDesc={item.route_desc}
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
RoutesTable.propTypes = {
    aryData: PropTypes.array
};
export default RoutesTable;
