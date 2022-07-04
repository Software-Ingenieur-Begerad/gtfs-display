import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './agency-table-entry';
import Head from './agency-table-head';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function AgencyTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const handleAryData = () => {
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                //console.log('aryData index: ' + index);
                return (
                    <Entry
			agencyId={item.agency_id}
			agencyName={item.agency_name}
			agencyUrl={item.agency_url}
			agencyTimezone={item.agency_timezone}
			agencyLang={item.agency_lang}
			agencyPhone={item.agency_phone}
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
AgencyTable.propTypes = {
    aryData: PropTypes.array
};
export default AgencyTable;
