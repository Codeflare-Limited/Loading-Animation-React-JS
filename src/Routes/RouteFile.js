import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from '../About';
import App from '../App';
import Contact from '../Contact';
import Services from '../Services';


function RouteFile(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route  path="/about" component={About} />
                <Route  path="/contact" component={Contact} />
                <Route  path="/services" component={Services} />
            </Switch>
        </Router>
    )
}

export default RouteFile;