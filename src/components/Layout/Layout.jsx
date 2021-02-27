import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import index from "../../images/index.jpg";
import { makeStyles } from "@material-ui/core/styles";
import landingPageStyle from "../../assets/components/landingPageStyle";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Footer from "../Footer/Footer.jsx";
import VehicleSection from "../VehicleSection/VehicleSection";

const useStyles = makeStyles(landingPageStyle);

//youre going to re do all of this and get your styles thats fucking NEEDED

const Layout = (props) => {
  const { children } = props;
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  return (
    <div>
      <CssBaseline />
      <Header
        color="transparent"
        brand="Apex Auto Movers"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 780,
          color: "dark",
        }}
      />
      <Parallax image={index} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <h1 style={styles.title}>
                Top Rated Vehicle Shipping Services in the South East
              </h1>
              <h4>Why choosing us will save you the most</h4>
              <br />
            </GridItem>
            <GridItem xs={12} md={6}>
              <VehicleSection />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  title: {
    fontFamily: "Impact, fantasy",
    fontSize: "44px",
  },
};

export default Layout;
