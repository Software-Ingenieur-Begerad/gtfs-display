import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import ShapesEntry from './shapes-table-entry';
import ShapesHead from './shapes-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function GtfsTableSwitch ({ aryData, name }) {
    const handleTableHead = () => {
        console.log('aryData.length: ' + aryData.length);
        if (aryData.length > 0) {
            switch (name) {
                case 'agency':
                    console.log('agency');
                    break;
                case 'calendar':
                    console.log('calendar');
                    break;
                case 'calendar_dates':
                    console.log('calendar_dates');
                    break;
                case 'level':
                    console.log('level');
                    break;
                case 'routes':
                    console.log('routes');
                    break;
                case 'shapes':
                    console.log('shapes');
                    return (
                        <thead>
                            <ShapesHead />
                        </thead>
                    );
                    break;
                case 'stops':
                    console.log('stops');
                    break;
                case 'transitions':
                    console.log('tansitions');
                    break;
                default:
                    console.log('default');
                    console.error('GTFS file unknown');
            }
        } else {
            console.log('aryData NOT available');
            return null;
        }
    };
    console.log('name: ' + name);
    const handleTableEntry = () => {
        console.log('aryData.length: ' + aryData.length);
        if (aryData.length > 0) {
            //iterate over array
            return aryData.map((item, index) => {
                switch (name) {
                    case 'agency':
                        console.log('agency');
                        break;
                    case 'calendar':
                        console.log('calendar');
                        break;
                    case 'calendar_dates':
                        console.log('calendar_dates');
                        break;
                    case 'level':
                        console.log('level');
                        break;
                    case 'routes':
                        console.log('routes');
                        break;
                    case 'shapes':
                        console.log('shapes');
                        return (
                            <tbody>
                                <ShapesEntry
                                    shapeId={item.shape_id}
                                    shapePtLat={item.shape_pt_lat}
                                    shapePtLon={item.shape_pt_lon}
                                    shapePtSequence={item.shape_pt_sequence}
                                    key={index}
                                />
                            </tbody>
                        );
                        break;
                    case 'stops':
                        console.log('stops');
                        break;
                    case 'transitions':
                        console.log('tansitions');
                        break;
                    default:
                        console.log('default');
                        console.error('GTFS file unknown');
                }
            });
        } else {
            console.log('aryData NOT available');
            return null;
        }
    };

    /*return a React element*/
    return (
        <>
            <Table striped bordered hover size="sm" variant="dark" responsive>
                {handleTableHead()}
                {handleTableEntry()}
            </Table>
        </>
    );
}
GtfsTableSwitch.propTypes = {
    aryData: PropTypes.array,
    name: PropTypes.string
};
export default GtfsTableSwitch;
