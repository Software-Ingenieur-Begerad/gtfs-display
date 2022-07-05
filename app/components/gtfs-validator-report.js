import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import config from '../config';
const GtfsValidatorReport = () => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <>
                <Alert variant={'secondary'} onClose={() => setShow(false)} dismissible>
          A daily{' '}
                    <Alert.Link href={config.GTFS_VALIDATOR_REPORT}>
            report
                    </Alert.Link>{' '}
          about compliance of this GTFS feed with these{' '}
                    <Alert.Link href="https://github.com/MobilityData/GTFS_Schedule_Best-Practices">
            Best Practices{' '}
                    </Alert.Link>{' '}
          is generated using the{' '}
                    <Alert.Link href="https://github.com/MobilityData/gtfs-validator">
            gtfs-validator{' '}
                    </Alert.Link>
          .
                </Alert>
            </>
        );
    } else {
        return null;
    }
};

export default GtfsValidatorReport;
