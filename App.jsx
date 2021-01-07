import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import './index.css';
import Footer from './Footer';
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" render={Home} />
                <Route exact path="/service" render={Service} />
                <Route exact path="/about" render={About} />
                <Route exact path="/contact" render={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
