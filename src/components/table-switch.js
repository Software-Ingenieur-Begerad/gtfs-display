import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import AgencyHead from './agency-table-head';
import AgencyEntry from './agency-table-entry';
import CalendarHead from './calendar-table-head';
import CalendarDatesHead from './calendar-dates-table-head';
import FrequenciesHead from './frequencies-table-head';
import PathwaysHead from './pathways-table-head';
import RouteHead from './routes-table-head';
import ShapesEntry from './shapes-table-entry';
import ShapesHead from './shapes-table-head';
import StopsEntry from './stops-table-entry';
import StopsHead from './stops-table-head';
import StopTimesHead from './stop-times-table-head';
import TransfersHead from './transfers-table-head';
import TripsHead from './trips-table-head';

/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitch ({ aryData, name }) {
    const handleTableHead = () => {
        console.log('aryData.length: ' + aryData.length);
        console.log('TableSwitch name: ' + name);
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
                    return (
                        <thead>
                            <CalendarHead />
                        </thead>
                    );
                    break;
                case 'calendar_dates':
                    return (
                        <thead>
                            <CalendarDatesHead />
                        </thead>
                    );
                    break;
                case 'frequencies':
                    return (
                        <thead>
                            <FrequenciesHead />
                        </thead>
                    );
                    break;
                case 'level':
                    console.log('level');
                    break;
                case 'pathways':
                    return (
                        <thead>
                            <PathwaysHead />
                        </thead>
                    );
                    break;
                case 'routes':
                    return (
                        <thead>
                            <RouteHead />
                        </thead>
                    );
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
                case 'stop_times':
                    return (
                        <thead>
                            <StopTimesHead />
                        </thead>
                    );
                    break;
                case 'transfers':
                    return (
                        <thead>
                            <TransfersHead />
                        </thead>
                    );
                    break;
                case 'trips':
                    return (
                        <thead>
                            <TripsHead />
                        </thead>
                    );
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
    const handleTableEntry = () => {
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
                    case 'frequencies':
                        console.log('frequencies');
                        break;
                    case 'level':
                        console.log('level');
                        break;
                    case 'pathways':
                        console.log('pathways');
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
                    case 'stop_times':
                        console.log('stop_times');
                        break;
                    case 'transfers':
                        console.log('tansfers');
                        break;
                    case 'trips':
                        console.log('trips');
                        break;
                    default:
                        console.error('GTFS file unknown');
                }
            });
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
