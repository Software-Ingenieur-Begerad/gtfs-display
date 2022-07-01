import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './shapes-table-entry';
import Head from './shapes-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function ShapesTable ({ aryData }) {
    const handleAryData = () => {        
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                return (
                    <Entry
                        shapeId={item.shape_id}
                        shapePtLat={item.shape_pt_lat}
                        shapePtLon={item.shape_pt_lon}
                        shapePtSequence={item.shape_pt_sequence}
                        key={index}
                    />
                );
            });
        } else {
            console.error('aryData NOT available');
            return null;
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
ShapesTable.propTypes = {
    aryData: PropTypes.array
};
export default ShapesTable;
