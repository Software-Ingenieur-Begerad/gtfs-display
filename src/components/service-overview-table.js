import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './service-overview-table-entry';
import Head from './service-overview-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*accept a single property object argument*/
function ServiceOverviewTable (props) {
    const getService = () => {
    //iterate over object
        if (props.service) {
            return Object.entries(props.service).map((agencies, key) => {
                //console.log('key: ' + key);
                let objRoutes = agencies[1];
                let count = Object.keys(objRoutes).length;
                //console.log('count: ' + count);
                let agency = agencies[0];
                return <Entry agency={agency} count={count} key={key} />;
            });
        } else {
            console.log('service NOT available');
            return null;
        }
    };

    if (props.render) {
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

ServiceOverviewTable.propTypes = {
    service: PropTypes.object,
    render: PropTypes.bool
};

export default ServiceOverviewTable;
