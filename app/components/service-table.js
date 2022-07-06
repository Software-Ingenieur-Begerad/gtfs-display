import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './service-table-entry';
import Head from './service-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
function ServiceTable ({service,render}) {
    /*map over msgs array and return Standortmeldungen*/
    const getService = () => {
    //iterate over object
        if (service) {
            return Object.entries(service).map((trips, key) => {
                /*the strict equals operator does not converts operants of differnet type*/
                //console.log('key: ' + key);
                let objTrips = trips[1];
                let count = Object.keys(objTrips).length;
                //console.log('count: ' + count);
                let time = parseInt(trips[0], 10);
                //console.log('time: ' + parseInt(time, 10));
                let date = new Date(time);
                //console.log('date: ' + date);
                return <Entry date={date.toDateString()} count={count} key={key} />;
            });
        } else {
            console.error('service NOT available');
	    return null;
        }
    };

    if (render) {
    /*return a React element*/
        return (
            <>
                {/*size="sm" cuts cell padding in half*/}
                {/*variant="dark" inverts colors*/}
                <Table striped bordered hover size="sm" variant="dark" responsive>
                    <thead className="thead-dark">
                        <Head />
                    </thead>
                    <tbody>{getService()}</tbody>
                </Table>
            </>
        );
    } else {
        return null;
    }
}

ServiceTable.propTypes = {
    service: PropTypes.object,
    render: PropTypes.bool
};

export default ServiceTable;
