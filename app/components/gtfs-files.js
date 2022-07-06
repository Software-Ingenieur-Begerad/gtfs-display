import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GtfsFile from './gtfs-file';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import config from '../config';
import PropTypes from 'prop-types';
const GtfsFiles = ({data}) => {
    if (data.length>0) {
        return (
            <>
                <Container>
                    <Row>
                        {data.map((item, index) => {
                            return <GtfsFile key={index} name={item['table_name']} />;
                        })}
                    </Row>
                    <Row>
                        <hr />
                    </Row>
                </Container>
            </>
        );
    } else {
        return <p>List of GTFS files loading...</p>;
    }
};
GtfsFiles.propTypes = {
    data: PropTypes.array
};
export default GtfsFiles;
