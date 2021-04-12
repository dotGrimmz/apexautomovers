import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const Review = (props) => {
  const { avatar, description, date, firstName, lastName } = props;
  const styles = {
    card: {
      maxWidth: "800px",
      margin: "60px auto",
      "& $cardDescription": {
        fontStyle: "italic",
      },
      minHeight: "260px",
      backgroundColor: "transparent",
      borderColor: "transparent",
    },
    avatar: {
      width: "150px",
      height: "150px",
      marginBottom: "2%",
    },
    description: {
      display: "block",
      fontSize: "20px",
      color: "white",
      fontFamily: "Courier New Copperplate",
      paddingBottom: "0px",
    },
    fullName: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "grey",
      fontFamily: "Copperplate",
      marginTop: "0px",
      marginBottom: "0px",
    },
    textContainer: {
      padding: "0px",
      margin: "0px",
    },
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleFullName = (first, last) => {
    return (
      first.charAt(0).toUpperCase() +
      first.slice(1) +
      " " +
      last.charAt(0).toUpperCase() +
      last.slice(1)
    );
  };

  const handleDescription = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const handleDate = (value) => {
    let superDate = new Date(value);
    return months[superDate.getMonth()] + ", " + superDate.getFullYear();
  };

  return (
    <div style={styles.card} >
      <Grid container justify="center">
        <Grid item xs={12} align="center">
          <Avatar src={avatar} style={styles.avatar} />
        </Grid>
        <Grid item xs={12} align="center">
          <h5 style={styles.description}>{handleDescription(description)}</h5>
        </Grid>
        <Grid item xs={12} align="center" style={styles.textContainer}>
          <h6 style={styles.fullName}>{handleFullName(firstName, lastName)}</h6>
          <h6 style={styles.fullName}>{handleDate(date)}</h6>
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
