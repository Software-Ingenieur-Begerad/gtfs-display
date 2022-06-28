import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GtfsTablesSelect from '../components/gtfs-tables-select';
import GtfsTable from '../components/gtfs-table.js';
/*controlled component: input form value controlled by React*/
const GtfsTableSelection = (props) => {
    /*destructuring*/
    const { options } = props;
    const defaultValue = 'Select GTFS file';
    /*store and initialise data in function component state*/
    const [gtfsFile, setGtfsFile] = useState(defaultValue);
    const handleChangeGtfsFile = (event) => {
        console.log('event.target.value: ' + event.target.value);
        setGtfsFile((gtfsFile) => event.target.value);
    };
    const select = (
        <GtfsTablesSelect
            name="GtfsFile"
            onChange={handleChangeGtfsFile}
            options={options}
            defaultValue={defaultValue}
        />
    );
    if (options) {
        return (
            <div>
                {select}
                <GtfsTable name={gtfsFile} />
            </div>
        );
    } else {
        return (
            <div>
                <p>loading...</p>
            </div>
        );
    }
};

export default GtfsTableSelection;

GtfsTableSelection.propTypes = {
    options: PropTypes.array
};
