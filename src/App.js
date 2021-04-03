import React, { lazy, Suspense } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import ContextImplementation from '../src/context/ContextImplementation';

const LandingPage = lazy(() => import('./pages/LandingPage/LandingPage'))
const QuotePage = lazy(() => import('./pages/QuotePage/QuotePage'))



function App() {
  var hist = createBrowserHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    //make the suspence fallback a dope ass Icon
    <Suspense fallback={<div />}>
      <Router history={hist}>
        <ContextImplementation>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Route path='/home' component={LandingPage} />
            <Route path='/quote' component={QuotePage} />
          </MuiPickersUtilsProvider>
        </ContextImplementation>

      </Router>
    </Suspense>

  );
}

export default App;
