import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import AgencyHead from './agency-table-head';
import AgencyEntry from './agency-table-entry';
import CalendarHead from './calendar-table-head';
import CalendarEntry from './calendar-table-entry';
import CalendarDatesHead from './calendar-dates-table-head';
import CalendarDatesEntry from './calendar-dates-table-entry';
import FrequenciesHead from './frequencies-table-head';
import PathwaysHead from './pathways-table-head';
import RouteHead from './routes-table-head';
import ShapesEntry from './shapes-table-entry';
import ShapesHead from './shapes-table-head';
import StopsEntry from './stops-table-entry';
import StopsHead from './stops-table-head';
import StopTimesHead from './stop-times-table-head';
import TransfersHead from './transfers-table-head';
import TransfersEntry from './transfers-table-entry';
import TripsHead from './trips-table-head';
import TripsEntry from './trips-table-entry';

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
                        return (
                            <CalendarEntry
                                serviceId={item.service_id}
                                monday={item.monday}
                                tuesday={item.tuesday}
                                wednesday={item.wednesday}
                                thursday={item.thursday}
                                friday={item.friday}
                                saturday={item.saturday}
                                sunday={item.sunday}
                                startDate={item.start_date}
                                endDate={item.end_date}
                                key={index}
                            />
                        );
                        break;
                    case 'calendar_dates':
                        return (
                            <CalendarDatesEntry
                                serviceId={item.service_id}
                                date={item.date}
                                exceptionType={item.exception_type}
                                key={index}
                            />
                        );
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
                        return (
                            <TransfersEntry
                                fromStopId={item.from_stop_id}
                                toStopId={item.to_stop_id}
                                fromRouteId={item.from_route_id}
                                toRouteId={item.to_route_id}
                                fromTripId={item.from_trip_id}
                                toTripId={item.to_trip_id}
                                transerType={item.transfer_type}
                                minTransferTime={item.min_transfer_time}
                                key={index}
                            />
                        );
                        break;
                    case 'trips':
                        return (
                            <TripsEntry
                                routeId={item.route_id}
                                serviceId={item.service_id}
                                tripId={item.trip_id}
                                tripHeadsign={item.trip_headsign}
                                tripShortName={item.trip_short_name}
                                directionId={item.direction_id}
                                blockId={item.block_id}
                                shapeId={item.shape_id}
                                wheelchairAccessible={item.wheelchair_accessible}
                                bikesAllowed={item.bikes_allowed}
                                key={index}
                            />
                        );
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
