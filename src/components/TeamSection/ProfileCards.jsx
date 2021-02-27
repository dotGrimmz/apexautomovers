import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import { IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const styles = {
  title: {
    fontFamily: "Roboto Slab",
    fontWeight: 700,
  },
  divider: {
    maxWidth: "80%",
  },
  avatar: {
    width: "150px",
    height: "150px",
    margin: "2%",
    elevation: 2,
  },
  card: {
    width: "200px",
    minHeight: "300px",
  },
  box: {
    border: "2px black solid",
  },
  description: {
    paddingLeft: "5%",
  },
  twitterIcon: {
    color: "#1DA1F2",
  },
  facebookIcon: {
    color: "#4267B2",
  },
  linkedinIcon: {
    color: "#0e76a8",
  },
  instagramIcon: {
    color: "#800020",
  },
  emailIcon: {
    color: "#CFB997",
  },
  iphoneIcon: {
    color: "#000000",
  },
};

const ProfileCards = (props) => {
  const { image, title, description, socialMedias } = props;

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      style={styles.card}
    >
      <Grid item xs={12} align="center" raised>
        <Avatar style={styles.avatar} alt="BradProfilePic" src={image} />
      </Grid>
      <Grid item>
        <p>{title}</p>
      </Grid>
      <Grid item align="center">
        <Typography textAlign="center" variant="caption">
          {description}
        </Typography>
      </Grid>
      <Grid container direction="row" justify="space-evenly" align="center">
        {socialMedias.twitter && (
          <IconButton href={socialMedias.twitter}>
            <TwitterIcon style={styles.twitterIcon} />
          </IconButton>
        )}
        {socialMedias.email && (
          <IconButton href={`mailto:${socialMedias.email}`}>
            <EmailIcon style={styles.emailIcon} />
          </IconButton>
        )}
        {socialMedias.instagram && (
          <IconButton href={socialMedias.instagram}>
            <InstagramIcon style={styles.instagramIcon} />
          </IconButton>
        )}
        {socialMedias.phoneNumber && (
          <Tooltip placement="top" title={socialMedias.phoneNumber}>
            <IconButton styles={styles.iphoneIcon}>
              <PhoneIphoneIcon />
            </IconButton>
          </Tooltip>
        )}
        {socialMedias.LinkedIn && (
          <IconButton href={socialMedias.LinkedIn}>
            <LinkedInIcon style={styles.linkedinIcon} />
          </IconButton>
        )}
        {socialMedias.facebook && (
          <IconButton href={socialMedias.facebook}>
            <FacebookIcon style={styles.facebookIcon} />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileCards;
