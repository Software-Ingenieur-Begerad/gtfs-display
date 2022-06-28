import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import AgencyHead from './agency-table-head';
import AgencyEntry from './agency-table-entry';
import ShapesEntry from './shapes-table-entry';
import ShapesHead from './shapes-table-head';
import StopsEntry from './stops-table-entry';
import StopsHead from './stops-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitch ({ aryData, name }) {
    const handleTableHead = () => {
        console.log('aryData.length: ' + aryData.length);
        if (aryData.length > 0) {
            switch (name) {
                case 'agency':
                    return (
                        <thead>
                            <AgencyHead />
                        </thead>
                    );
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
                    return (
                        <thead>
                            <StopsHead />
                        </thead>
                    );
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
                        return (
                            <AgencyEntry
                                agencyId={item.agency_id}
                                agencyName={item.agency_name}
                                agencyUrl={item.agency_url}
                                agencyTimezone={item.agency_timezone}
                                agencyLanguage={item.agency_language}
                                agencyPhone={item.agency_phone}
                                key={index}
                            />
                        );
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
                            <ShapesEntry
                                shapeId={item.shape_id}
                                shapePtLat={item.shape_pt_lat}
                                shapePtLon={item.shape_pt_lon}
                                shapePtSequence={item.shape_pt_sequence}
                                key={index}
                            />
                        );
                        break;
                    case 'stops':
                        console.log('stops');
                        return (
                            <StopsEntry
                                stopId={item.stop_id}
                                stopCode={item.stop_code}
                                stopName={item.stop_name}
                                stopDesc={item.stop_desc}
                                stopLat={item.stop_lat}
                                stopLon={item.stop_lon}
                                locationType={item.location_type}
                                parentStation={item.parent_station}
                                wheelchairBoarding={item.wheelchair_boarding}
                                platformCode={item.platform_code}
                                zoneId={item.zone_id}
                                key={index}
                            />
                        );
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
                <tbody>{handleTableEntry()}</tbody>
            </Table>
        </>
    );
}
TableSwitch.propTypes = {
    aryData: PropTypes.array,
    name: PropTypes.string
};
export default TableSwitch;
