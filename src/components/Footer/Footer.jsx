import React, { useState, forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import { useScrollTo } from "react-use-window-scroll";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

const Footer = (props) => {
  const { handleReviewsScrollIntoView, handleServicesScrollIntoView, handleTeamScrollIntoView } = props;
  console.log(handleServicesScrollIntoView, 'scroll into view in footer')

  const theme = useTheme();
  const scrollTo = useScrollTo();
  const screenSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  const screenMedium = useMediaQuery(theme.breakpoints.only("md"));
  const screenLarge = useMediaQuery(theme.breakpoints.only("lg"));
  const screenExtraLarge = useMediaQuery(theme.breakpoints.only("xl"));


  if (screenSmall) console.log("screen small true");
  if (screenExtraSmall) console.log("screen extra small true");
  if (screenMedium) console.log("screen medium");
  if (screenLarge) console.log("screen large");
  if (screenExtraLarge) console.log("screen extra large");

  const styles = {
    container: {
      backgroundColor: "transparent",
      maxHeight: "250px",
      minHieght: "175px",
      marginTop: "2%",
      marginBottom: "2%",
    },
    aboutUsBtn: {
      minLength: "200px",
    },
  };

  // first set top: 1664.39, left: 30
  // second set top: 2523.42, left: 10

  // ok so the goal is to collect the data needed for each element coordinate no matter what view and swap them
  // for whichever view is true

  const [coordinates, setCoordinates] = useState({
    services: {
      top: 879,
      left: 30,
    },
    reviews: {
      top: 1628,
      left: 30,
    },
    aboutUs: {
      top: 2200,
      left: 0,
    },
  });



  return (
    <footer style={styles.container}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={4} md={2} align="center">
          <Button
            onClick={() => handleServicesScrollIntoView()}
          >
            Services
          </Button>
        </Grid>
        <Grid item xs={4} md={2} align="center">
          <Button
            onClick={() => handleReviewsScrollIntoView()}
          >
            Reviews
          </Button>
        </Grid>
        <Grid item xs={4} md={2} align="center">
          <Button
            onClick={() => handleTeamScrollIntoView()}
          >
            About Us
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          align={screenSmall || screenExtraSmall ? "center" : "right"}
        >
          &copy; {1900 + new Date().getYear()} , Powered by <b>JusGrimmz</b>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
