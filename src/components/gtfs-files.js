import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GtfsFile from './gtfs-file';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const GtfsFiles = () => {
    /*store and initialise data in function component state*/
    const [tables, setTables] = useState([]);
    /*fetch data in a JavaScript function*/
    const getTables = async () => {
        try {
            /*TODO make route available using config*/
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            const tables = await axios.get(
                'https://www.v1gtfs.delfi.api.swingbe.de/table-names'
            );

            /*set state*/
            setTables(tables.data);
        } catch (err) {
            console.log('err.message: ' + err.message);
        }
    };

    /*this hook is run after a DOM update. Changing state migh result in an infinite loop*/
    useEffect(() => {
    /*effect goes here*/

        /*hook need to be placed in body of the function component in which it is used*/
        getTables();

    /*use an empty dependency array to ensure the hook is running only once*/
    /*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, []);
    if (tables) {
        return (
            <Container>
                <Row>
                    {tables.map((item, index) => {
                        return <GtfsFile key={index} name={item['table_name']} />;
                    })}
                </Row>
            </Container>
        );
    } else {
        return <p>List of GTFS files loading...</p>;
    }
};

export default GtfsFiles;
