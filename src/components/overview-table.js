import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './overview-table-entry';
import Head from './overview-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function OverviewTable ({ overview }) {
    const handleOverview = () => {
        if (overview) {
            //iterate over array
            return overview.map((item, index) => {
                return (
                    <Entry
                        agencyName={item.agency_name}
                        routeCount={item.route_count}
                        day={item.day}
                        key={index}
                    />
                );
            });
        } else {
            console.log('overview NOT available');
            return null;
        }
    };

    /*return a React element*/
    return (
        <>
            {/*size="sm" cuts cell padding in half*/}
            {/*variant="dark" inverts colors*/}
            <Table striped bordered hover size="sm" variant="dark" responsive>
                <thead className="thead-dark">
                    <Head />
                </thead>
                <tbody>{handleOverview()}</tbody>
            </Table>
        </>
    );
}

OverviewTable.propTypes = {
    overview: PropTypes.array
};

export default OverviewTable;
