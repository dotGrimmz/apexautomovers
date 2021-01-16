import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import Header from "./components/Header/Header.jsx";
import HeaderLinks from "./components/Header/HeaderLinks";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import landingPageStyle from "./assets/components/landingPageStyle";
import Parallax from "./components/Parallax/Parallax.jsx";
import index from "./images/index.jpg";
import GridItem from "./components/Grid/GridItem";
import GridContainer from "./components/Grid/GridContainer";
import Button from "./components/CustomButtons/Button";

const useStyles = makeStyles(landingPageStyle);

function App() {
  const classes = useStyles();
  var hist = createBrowserHistory();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  // move the parallax to another folder with the information youll end up adding to the page.
  // this is going to be great
  // first build a git repo
  return (
    <div>
      <CssBaseline />
      <Router history={hist}>
        <Header
          color="transparent"
          brand="Apex Auto Movers"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "red",
          }}
        />
        <Parallax image={index} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <h1 className={classes.title}>Apex Auto Movers.</h1>
                <h4>Why choosing us will save you the most</h4>
                <br />
                <Button color="danger" size="lg" href="/" target="_blank">
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </Router>
    </div>
  );
}

export default App;
