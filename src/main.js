import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*some stylesheet is required to use react-bootstrip components*/
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/nav-bar';
import HomePage from './pages/homepage';
import Agency from './pages/agency';
import Frequencies from './pages/frequencies';
import GtfsRoutes from './pages/routes';
import Service from './pages/service';
import ServiceOverview from './pages/service-overview';
import Stops from './pages/stops';
import Trips from './pages/trips';
import Contact from './pages/contact';

const Main = () => {
    return (
    //BrowserRouter is the router implementation for HTML5 browsers
    //Link enables Routes on an anchor tag
    //Switch returns only the first matching route rather than all
    //Route is the conditionally shown component //based on matching a path to a URL
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/agency" element={<Agency />} />
                <Route path="/frequencies" element={<Frequencies />} />
                <Route path="/routes" element={<GtfsRoutes />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service-overview" element={<ServiceOverview />} />
                <Route path="/stops" element={<Stops />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
