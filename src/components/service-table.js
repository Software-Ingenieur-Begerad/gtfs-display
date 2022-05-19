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
        let timeCount = 0;
        for (const time in props.service) {
            if (props.service.hasOwnProperty(time)) {
                console.log('time: ' + time);
                let tripCount = 0;
                for (const tripId in props.service[time]) {
                    console.log('tripId: ' + tripId);
                    tripCount++;
                }
                timeCount++;
                console.log('tripCount: ' + tripCount);
                return <Entry time={time} tripCount={tripCount} key={time} />;
            }
        }
        console.log('timeCount: ' + timeCount);

    /*
        if (props.service) {
            console.log('service NOT available');
            return props.service.map((entry, key) => {
                //the strict equals operator does not converts operants of differnet type

                if (entry.teleType === '1') {
                    return <Entry obj={entry} key={key} />;
                }

                for (var i = 0; i < 1; i++) {
                    console.log('key: ' + key + ', entry: ' + entry);
                }
        });
        } else {
            console.log('service NOT available');
        }
    */
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
