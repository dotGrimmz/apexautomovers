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
import Button from "../CustomButtons/Button";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

const useStyles = makeStyles(landingPageStyle);

const Layout = (props) => {
  // const { children } = props;
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
          height: 500,
          color: "dark",
        }}
      />
      <Parallax image={index} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <h1 className={classes.title}>Apex Auto Movers</h1>
              <h4>Why choosing us will save you the most</h4>
              <br />
              <Button color="danger" size="lg" href="/" target="_blank">
                <i className="fas fa-play" />
                Get an Estimate Now
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <FeaturedSection />
        <FeaturedSection />

        <FeaturedSection />
        <FeaturedSection />
        <FeaturedSection />
      </div>
    </div>
  );
};

export default Layout;
