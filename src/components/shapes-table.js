import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Entry from './shapes-table-entry';
import Head from './shapes-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function ShapesTable ({ aryData }) {
    const [searchField, setSearchField] = useState('');
    const filteredAryData = aryData.filter((item, index) => {
        console.log('aryData index: ' + index);
        return (
            item.id.toLowerCase().includes(searchField.toLowerCase()) ||
      item.shape_pt_lat.toLowerCase().includes(searchField.toLowerCase())
        );
    });
    const handleAryData = () => {
        if (filteredAryData.length > 0) {
            //iterate over array
            return filteredAryData.map((item, index) => {
                console.log('filteredAryData index: ' + index);
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
    const handleSearch = (e) => {
        setSearchField(e.target.value);
    };

    /*return a React element*/
    return (
        <>
            <input
                type="search"
                placeholder="Search placeholder"
                title="Search title"
                onChange={handleSearch}
            />
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
