import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './service-table-entry';
import Head from './service-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function ServiceTableHtml (props) {
    /*map over msgs array and return Standortmeldungen*/
    const getService = () => {
    //iterate over object
        if (props.service) {
            return Object.entries(props.service).map((trips, key) => {
                /*the strict equals operator does not converts operants of differnet type*/
                //console.log('key: ' + key);
                let objTrips = trips[1];
                let count = Object.keys(objTrips).length;
                //console.log('count: ' + count);
                let time = parseInt(trips[0], 10);
                //console.log('time: ' + parseInt(time, 10));
                let date = new Date(time);
                //console.log('date: ' + date);
                let lDate = date.toLocaleDateString();
                //console.log('lDate: ' + lDate);
                return <Entry date={lDate} count={count} key={key} />;
            });
        } else {
            console.log('service NOT available');
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
                <tbody>{getService()}</tbody>
            </Table>
        </>
    );
}

ServiceTableHtml.propTypes = {
    service: PropTypes.object
};

export default ServiceTableHtml;
