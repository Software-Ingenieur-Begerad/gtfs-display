function filterData(data, name,filter){
    if(data.length>0){
	//console.log('filterData() data.length: '+data.length);
	//console.log('filterData() name: '+name);
	//console.log('filterData() filter:'+filter);
    switch(name){
    case 'agency':
	return data.filter((item, index) => {
            return (
		(item.agency_id!==null && item.agency_id.toLowerCase().includes(filter.toLowerCase())) ||
		    item.agency_name.toLowerCase().includes(filter.toLowerCase()) ||
		    item.agency_url.toLowerCase().includes(filter.toLowerCase()) ||
		    item.agency_timezone.toLowerCase().includes(filter.toLowerCase()) ||
		    (item.agency_lang!==null && item.agency_lang.toLowerCase().includes(filter.toLowerCase())) ||
		    (item.agency_phone!==null && item.agency_phone.toLowerCase().includes(filter.toLowerCase()))
            );
	});
	break;
    case 'agency-id-name':
	return data.filter((item, index) => {
            return (
		(item.agency_id!==null && item.agency_id.toLowerCase().includes(filter.toLowerCase())) ||
		    item.agency_name.toLowerCase().includes(filter.toLowerCase())
            );
	});
	break;
    case 'frequencies':
	return data.filter((item, index) => {
	    return (
	    item.trip_id.toLowerCase().includes(filter.toLowerCase()) ||
		item.start_time.toLowerCase().includes(filter.toLowerCase()) ||
		item.end_time.toLowerCase().includes(filter.toLowerCase()) ||
		item.headway_secs.toString().includes(filter) ||
		(item.exact_times!==null && item.exact_times.toString().includes(filter))
            );
	});
	break;
    case 'routes':
	return data.filter((item, index) => {
	return (
            item.route_id.toLowerCase().includes(filter.toLowerCase()) ||
		(item.agency_id!==null && item.agency_id.toLowerCase().includes(filter.toLowerCase())) ||
		(item.route_short_name!==null && item.route_short_name.toLowerCase().includes(filter.toLowerCase())) ||
		(item.route_long_name!==null && item.route_long_name.toLowerCase().includes(filter.toLowerCase())) ||
		item.route_type.toString().includes(filter.toLowerCase()) ||
		(item.route_color!==null && item.route_color.toLowerCase().includes(filter.toLowerCase())) ||
		(item.route_text_color!==null && item.route_text_color.toLowerCase().includes(filter.toLowerCase())) ||
		(item.route_desc!==null &&item.route_desc.toLowerCase().includes(filter.toLowerCase()))
        );
	});
	break;
    case 'shapes':
	return data.filter((item, index) => {	
	return (
            item.shape_id.toLowerCase().includes(filter.toLowerCase()) ||
		item.shape_pt_lat.toString().includes(filter) ||
		item.shape_pt_lon.toString().includes(filter) ||
		item.shape_pt_sequence.toString().includes(filter)
        );
	});
	break;
    case 'stops':
	return data.filter((item, index) => {	
	return (
            item.stop_id.toLowerCase().includes(filter.toLowerCase()) ||
		(item.stop_code!==null && item.stop_code.toLowerCase().includes(filter.toLowerCase())) ||
		(item.stop_name!==null && item.stop_name.toLowerCase().includes(filter.toLowerCase())) ||
		(item.stop_desc!==null && item.stop_descr.toLowerCase().includes(filter.toLowerCase())) ||
		(item.stop_lat!==null && item.stop_lat.toString().includes(filter)) ||
		(item.stop_lon!==null && item.stop_lon.toString().includes(filter)) ||
		(item.location_type!==null && item.location_type.toString().includes(filter)) ||
		(item.parent_station!==null && item.parent_station.toString().includes(filter)) ||
		(item.wheelchair_boarding!==null && item.wheelchair_boarding.toString().includes(filter)) ||
		(item.platform_code!==null && item.platform_code.toLowerCase().includes(filter.toLowerCase())) ||
		(item.zone_id!==null && item.zone_id.toLowerCase().includes(filter.toLowerCase()))
        );
	});
	break;
    case 'trips':
	return data.filter((item, index) => {	
	return (
            item.route_id.toLowerCase().includes(filter.toLowerCase()) ||
		item.service_id.toLowerCase().includes(filter.toLowerCase()) ||
		item.trip_id.toLowerCase().includes(filter.toLowerCase()) ||
		(item.trip_headsign!==null && item.trip_headsign.toLowerCase().includes(filter.toLowerCase())) ||
		(item.trip_short_name!==null && item.trip_short_name.toLowerCase().includes(filter.toLowerCase())) ||
		(item.direction_id!==null && item.direction_id.toString().includes(filter)) ||
		(item.block_id!==null && item.block_id.toLowerCase().includes(filter.toLowerCase())) ||
		(item.shape_id!==null && item.shape_id.toLowerCase().includes(filter.toLowerCase())) ||
		(item.wheelchair_accessible!==null && item.wheelchair_accessible.toString().includes(filter)) ||
		(item.bikes_allowed!==null && item.bikes_allowed.toString().includes(filter))
        );
	});
	break;
    default:
	return data;
    }
    }else{
	return data;
    }
};
module.exports = {
    filterData
};
