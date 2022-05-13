import React, { useState } from 'react';

//controlled component: input form value controlled by React
const RouteForm = () => {
    const [submitting, setSubmitting] = useState(false);
    const [route, setRoute] = useState('');

    const handleSubmit = (e) => {
        event.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    };

    return (
        <>
            <p>Route: {route}</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Please enter route:</p>
                    <input
                        type="text"
                        value={route}
                        onChange={(e) => setRoute(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
                {submitting && <p>Submitting route {route}</p>}
            </form>
        </>
    );
};
export default RouteForm;
