import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*some stylesheet is required to use react-bootstrip components*/
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/nav-bar';
import HomePage from './pages/homepage';
import Files from './pages/files';
import Overview from './pages/overview';
import Service from './pages/service';
import TripCalendar from './pages/trip-calendar';
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
                <Route path="/files" element={<Files />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/service" element={<Service />} />
                <Route path="/trip-calendar" element={<TripCalendar />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Main;
