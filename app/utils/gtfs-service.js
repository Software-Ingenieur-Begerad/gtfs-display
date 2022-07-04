/*check if http get service day response includes data*/
function hasData (res) {
    if ('data' in res) {
        return true;
    } else {
        return false;
    }
}

/*provide http get service day response and get trip array*/
function getAryTripCount (res) {
    if (hasData(res)) {
        const objService = res.data;
        const aryService = Object.entries(objService);
        //console.log('aryService: ' + aryService);
        const aryTripCount = aryService.map((trip) => {
            const aryTrip = Object.keys(trip[1]);
            return aryTrip.length;
        });
        //console.log('aryTripCount: ' + aryTripCount);
        return aryTripCount;
    }
}

/*provide http get service day response and get time array*/
function getAryTime (res) {
    if (hasData(res)) {
        const objService = res.data;
        const aryService = Object.entries(objService);
        const arrTime = aryService.map((trips, key) => {
            let time = parseInt(trips[0], 10);
            return time;
        });
        return arrTime;
    }
}

module.exports = {
    getAryTime,
    getAryTripCount
};
