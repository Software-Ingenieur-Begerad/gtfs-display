import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import TableHeadSwitch from './table-head-switch';
import TableEntrySwitch from './table-entry-switch';
import config from '../config';
import {filterData} from '../utils/filter-data';
/*the simplest way to define a component is to write a JavaScript function*/
/*destructure props object*/
function TableSwitch ({name, isFetched, oset, limit, filter}) {
    //console.log('TableSwitch name: '+name);
    //console.log('TableSwitch isFetched: '+isFetched);
    //console.log('TableSwitch filter: '+filter);
    const [ary, setAry] = useState([]);
    const [aryFiltered, setAryFiltered] = useState([]);
    const [fetchCompleted, setFetchCompleted] = useState(isFetched);
    /*fetch ary in a JavaScript function*/
    const fetch = async () => {
        try {
            /*TODO handle errors: https://www.valentinog.com/blog/await-react/*/
            //fetch data only if user selection is unequal default value
            if (name.length>0 && name.indexOf(' ') === -1) {
                const address = `${config.API}${name}?oset=${oset}&limit=${limit}`;
		//console.log('address:'+address);
                const res = await axios.get(address);
		setAry((ary) => res.data);
		let data=filterData(res.data,name,filter);
		setAryFiltered((aryFiltered) => data);
            } else {
		console.error(`name ${name} not valid`);
		setAry((ary) => []);
	    }
        } catch (err) {
            console.error('err.message: ' + err.message);
	    setAry((ary) => []);
        }
    };
    useEffect(()=>{
	setAryFiltered((aryFiltered)=>{
	    let filtered=filterData(ary,name,filter);
	    return filtered;
	});
    },[filter]);
    useEffect(() => {
	/*effect goes here*/
	fetch();
	setFetchCompleted((fetchCompleted)=>true);
	/*use an empty dependency array to ensure the hook is running only once*/
	/*TODO study dependency array: https://reactjs.org/docs/hooks-effect.html*/
    }, [name,oset,limit]);
    if(fetchCompleted && aryFiltered.length > 0){
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
		    <TableHeadSwitch name={name}/>
		</thead>
                <tbody>
		    <TableEntrySwitch aryData={aryFiltered} name={name}/>
		</tbody>
            </Table>
        </>
	);
    }else{
	return null;
    }
}
TableSwitch.propTypes = {
    name: PropTypes.string,
    isFetched: PropTypes.bool,
    offset: PropTypes.number,
    limit: PropTypes.number,
    filter: PropTypes.string
};
export default TableSwitch;
