import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

const InfoArea = (props) => {
  const { icon, title, description } = props;
  return (
    <Card style={styles.container} alignItems="base-line">
      <Grid container>
        <Grid item xs={2} align="left" style={styles.iconContainer}>
          {icon}
        </Grid>
        <Grid item xs={10} align="right" style={styles.titleContainer}>
          <h4 style={styles.title}>{title}</h4>
        </Grid>
        <Grid item xs={12}>
          <h6 style={styles.description}>{description}</h6>
        </Grid>
      </Grid>
    </Card>
  );
};

const styles = {
  icon: {
    fontSize: "33px",
  },
  description: {
    marginLeft: "10%",
    whiteSpace: "normal",
    fontFamily: "Roboto Helvetica Arial sans-serif",
    color: "#999",
    overflow: "hidden",
    fontSize: "15px",
  },
  title: {
    color: "#3C4858",
    marginTop: "30px",
    fontFamily: "Roboto Slab Times New Roman serif",
    fontSize: "20px",
    marginBottom: "0px",
  },
  container: {
    maxWidth: "300px",
    minHeight: "180px",
    margin: "5%",
  },
  iconContainer: {
    paddingLeft: "5%",
    marginTop: "5%",
    marginBottom: "0px",
  },
  titleContainer: {
    paddingRight: "5%",
    paddingBottom: "0px",
  },
};

export default InfoArea;
