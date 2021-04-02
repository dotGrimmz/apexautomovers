import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import LandingPage from './pages/LandingPage';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


function App() {
  var hist = createBrowserHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    <Router history={hist}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Route component={LandingPage} />

      </MuiPickersUtilsProvider>
    </Router>

  );
}

export default App;
