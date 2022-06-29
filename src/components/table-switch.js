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
import RoutesHead from './routes-table-head';
import RoutesEntry from './routes-table-entry';
import ShapesHead from './shapes-table-head';
import ShapesEntry from './shapes-table-entry';
import StopsHead from './stops-table-head';
import StopsEntry from './stops-table-entry';
import StopTimesHead from './stop-times-table-head';
import StopTimesEntry from './stop-times-table-entry';
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
        switch (name) {
            case 'agency':
                return <AgencyHead />;
                break;
            case 'calendar':
                return (
                    <CalendarHead />
                );
                break;
            case 'calendar_dates':
                return (
                    <CalendarDatesHead />
                );
                break;
            case 'frequencies':
                return (
                    <FrequenciesHead />
                );
                break;
            case 'pathways':
                return (
                    <PathwaysHead />
                );
                break;
            case 'routes':
                return (
                    <RoutesHead />
                );
                break;
            case 'shapes':
                return (
                    <ShapesHead />
                );
                break;
            case 'stops':
                return (
                    <StopsHead />
                );
                break;
            case 'stop_times':
                return (
                    <StopTimesHead />
                );
                break;
            case 'transfers':
                return (
                    <TransfersHead />
                );
                break;
            case 'trips':
                return (
                    <TripsHead />
                );
                break;
            default:
                console.error('file unknown');
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
                    case 'routes':
                        return (
                            <RoutesEntry
                                routeId={item.route_id}
                                agencyId={item.agency_id}
                                routeShortName={item.route_short_name}
                                routeLongName={item.route_long_name}
                                routeType={item.route_type}
                                routeColor={item.route_color}
                                routeTextColor={item.route_text_color}
                                routeDesc={item.route_desc}
                                key={index}
                            />
                        );
                        break;
                    case 'shapes':
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
		    let arrivalTime = item.arrival_time;
		    /*TODO Why is this condition neccessary?*/
		    if (arrivalTime) {
                            return (
                                <StopTimesEntry
                                    tripId={item.trip_id}
                                    arrivalTimeHours={item.arrival_time['hours']}
				    arrivalTimeMinutes={item.arrival_time['minutes']}
				    departureTimeHours={item.departure_time['hours']}
				    departureTimeMinutes={item.departure_time['minutes']}
                                    stopId={item.stop_id}
                                    stopSequence={item.stop_sequence}
                                    pickupType={item.pickup_type}
                                    dropOffType={item.drop_off_type}
                                    stopHeadsign={item.stop_headsign}
                                    key={index}
                                />
                            );
		    } else {
                            return (
                                <StopTimesEntry
                                    tripId={item.trip_id}
                                    stopId={item.stop_id}
                                    stopSequence={item.stop_sequence}
                                    pickupType={item.pickup_type}
                                    dropOffType={item.drop_off_type}
                                    stopHeadsign={item.stop_headsign}
                                    key={index}
                                />
                            );
		    }
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
                        console.error('file unknown');
                }
            });
        }
    };
    /*return a React element*/
    return (
        <>
            <Table
                striped
                bordered
                hover
                size="sm"
                variant="dark"
                responsive
	    >
                <thead>
                    {handleTableHead()}
                </thead>
                <tbody>
		    {handleTableEntry()}
                </tbody>
            </Table>
        </>
    );
}
TableSwitch.propTypes = {
    aryData: PropTypes.array,
    name: PropTypes.string
};
export default TableSwitch;
