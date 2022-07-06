import React from 'react';
import PropTypes from 'prop-types';
import AgencyHead from './agency-table-head';
import CalendarHead from './calendar-table-head';
import CalendarDatesHead from './calendar-dates-table-head';
import FrequenciesHead from './frequencies-table-head';
import LevelsHead from './levels-table-head';
import PathwaysHead from './pathways-table-head';
import RoutesHead from './routes-table-head';
import ShapesHead from './shapes-table-head';
import StopsHead from './stops-table-head';
import StopTimesHead from './stop-times-table-head';
import TransfersHead from './transfers-table-head';
import TripsHead from './trips-table-head';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableHeadSwitch ({ name }) {
        switch (name) {
            case 'agency':
                return <AgencyHead />;
                break;
            case 'calendar':
                return <CalendarHead />;
                break;
            case 'calendar_dates':
                return <CalendarDatesHead />;
                break;
            case 'frequencies':
                return <FrequenciesHead />;
                break;
            case 'levels':
                return <LevelsHead />;
                break;
            case 'pathways':
                return <PathwaysHead />;
                break;
            case 'routes':
                return <RoutesHead />;
                break;
            case 'shapes':
                return <ShapesHead />;
                break;
            case 'stops':
                return <StopsHead />;
                break;
            case 'stop_times':
                return <StopTimesHead />;
                break;
            case 'transfers':
                return <TransfersHead />;
                break;
            case 'trips':
                return <TripsHead />;
                break;
        default:
            console.error(`${name} unknown`);
	    return null;
        }
}
TableHeadSwitch.propTypes = {
    name: PropTypes.string
};
export default TableHeadSwitch;
