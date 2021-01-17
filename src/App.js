import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Layout from "./components/Layout/Layout";

function App() {
  var hist = createBrowserHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    <div>
      <Router history={hist}>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
