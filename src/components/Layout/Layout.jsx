import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import classNames from "classnames";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Parallax from "../Parallax/Parallax";
import index from "../../images/index.jpg";
import { makeStyles } from "@material-ui/core/styles";
import landingPageStyle from "../../assets/components/landingPageStyle";
import Footer from "../Footer/Footer.jsx";
import HomeBanner from "./HomeBanner";

const useStyles = makeStyles(landingPageStyle);

const Layout = (props) => {
  const { children, handleReviewsScrollIntoView, handleServicesScrollIntoView, handleTeamScrollIntoView, handleQuoteScrollIntoView, title } = props;
  const classes = useStyles();


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });




  return (
    <div>
      <CssBaseline />
      <Header
        handleReviewsScrollIntoView={handleReviewsScrollIntoView}
        handleTeamScrollIntoView={handleTeamScrollIntoView}
        handleServicesScrollIntoView={handleServicesScrollIntoView}
        color="transparent"
        brand={<b>Apex Auto Movers</b>}
        links={<HeaderLinks
          handleReviewsScrollIntoView={handleReviewsScrollIntoView}
          handleTeamScrollIntoView={handleTeamScrollIntoView}
          handleServicesScrollIntoView={handleServicesScrollIntoView}
          dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 350,
          color: "dark",
        }}
      />
      <Parallax image={index} filter="dark">
        <div className={classes.container}>
          {title && <HomeBanner handleQuoteScrollIntoView={handleQuoteScrollIntoView} />}
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        {children}
      </div>
      <Footer handleReviewsScrollIntoView={handleReviewsScrollIntoView} handleTeamScrollIntoView={handleTeamScrollIntoView} handleServicesScrollIntoView={handleServicesScrollIntoView} />

    </div>
  );
};



export default Layout;
