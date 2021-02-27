import React from "react";

import {  Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./components/Layout/Layout";
import FeaturedSection from '../src/components/FeaturedSection/FeaturedSection.jsx';
import TeamSection from '../src/components/TeamSection/TeamSection.jsx';
import VehicleSection from "./components/VehicleSection/VehicleSection";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider}  from "@material-ui/pickers";


function App() {
  var hist = createBrowserHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
      <Router history={hist}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <Layout>
        {/* <Route  component={FeaturedSection} /> */}
        {/* <Route  component={VehicleSection} /> */}
        <Route  component={TeamSection} />
        
        </Layout>
        </MuiPickersUtilsProvider>
      </Router>
    
  );
}

export default App;
