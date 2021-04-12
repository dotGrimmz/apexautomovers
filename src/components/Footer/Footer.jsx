import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";

const Footer = (props) => {
  const { handleReviewsScrollIntoView, handleServicesScrollIntoView, handleTeamScrollIntoView } = props;

  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));



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
