import React from 'react';
import PropTypes from 'prop-types';
import ThisWeek from '../utils/ary-this-week';

const TableHeadWeek = () => {
    /*
Note: A Functional Component is a React Component without render function. Everything defined in the function's body is the render function which returns JSX in the end.
    */
    const getWeek = () => {
        return ThisWeek.getAryThisWeek(new Date()).map((item, itemKey) => (
            <WeekDay weekDay={item.toDateString()} key={itemKey} />
        ));
    };
    return <>{getWeek()}</>;
};

/*destructure props*/
const WeekDay = ({ weekDay }) => {
    if (weekDay) {
        return <td>{weekDay}</td>;
    } else {
    //TODO Add persistant logging!
        console.log('week day undefined');
        return null;
    }
};

WeekDay.propTypes = {
    weekDay: PropTypes.string
};

export default TableHeadWeek;
