import React from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";


const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/About" element = {<About />} />
                <Route path = "/Services" element = {<Services />} />
                <Route path = "/Pricing" element = {<Pricing />} />
                <Route path = "/Contact" element = {<Contact />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;