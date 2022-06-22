import React, { useState } from 'react';
import Select from '../components/drop-down-select';
import selOptions from '../components/drop-down-select-options';
const Explorer = () => {
    //handle state
    const [chosenSelValue, setChosenSelValue] = useState('');
    const handleChange = (e) => {
        console.log('prev chosenSelValue: ' + chosenSelValue);
        //console.log('e.target.id: ' + e.target.id);
        //console.log('e.target.type: ' + e.target.type);
        //console.log('e.target.className: ' + e.target.className);
        //console.log('e.target.tagName: ' + e.target.tagName);
        //console.log('e.target.name: ' + e.target.name);
        //console.log('e.target.value: ' + e.target.value);
        setChosenSelValue(e.target.value);
    };
    return (
        <>
            <Select
                msg="Select *.txt file to be explored"
                name="file"
                onChange={handleChange}
                options={selOptions}
            />
        </>
    );
};
export default Explorer;
