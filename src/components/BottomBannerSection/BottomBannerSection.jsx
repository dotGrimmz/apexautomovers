import React from "react";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useScrollTo } from "react-use-window-scroll";

const BottomBannerSection = () => {
  const scrollTo = useScrollTo();
  const theme = useTheme();
  const screenSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));

  const styles = {
    container: {
      borderRadius: "0px 0px 10px 10px",
      backgroundColor: "#343434",
      background:
        "radial-gradient(ellipse at center," +
        "#585858" +
        " 0," +
        "#232323" +
        " 100%)",

      width: "100%",
      height: "450px",
      margin: "auto",
    },
    text: {
      fontSize: screenSmall || screenExtraSmall ? "40px" : "60px",
      fontFamily: "Times New Roman",
      color: "grey",
      opacity: ".75",
    },
    chip: {
      height: "40px",
      margin: "auto",
      width: screenSmall || screenExtraSmall ? "200px" : "400px",
      backgroundColor: "#343434",
      background:
        "radial-gradient(ellipse at center," +
        "#FFFFFF" +
        " 0," +
        "#3f51b5" +
        " 100%)",
    },
    chipText: {
      fontSize: "15px",
    },
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={styles.container}
    >
      <Grid item xs={12} md={6} align="center">
        <h1 style={styles.text}>
          Ready to transport your car with Apex Auto Movers ?
        </h1>
      </Grid>
      <Grid item xs={12} md={6} align="center">
        <Chip
          style={styles.chip}
          label={<h6 style={styles.chipText}> Request A Quote</h6>}
          onClick={() => scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        />
      </Grid>
    </Grid>
  );
};

export default BottomBannerSection;
