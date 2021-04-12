import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ProfileCards from "./ProfileCards";
import Brad from "../../images/BradProfilePic.jpg";
import Kady from "../../images/KadyProfilePic.jpg";
import Keem from "../../images/KeemProfilePic.jpg";

const styles = {
  title: {
    fontFamily: "Roboto Slab",
    fontWeight: 700,
  },
  divider: {
    maxWidth: "80%",
    margin: "auto",
  },
  avatar: {
    width: "150px",
    height: "auto",
    margin: "2%",
  },
  card: {
    width: "200px",
  },
  box: {
    border: "2px black solid",
  },
  description: {
    paddingLeft: "5%",
  },
  subtitle: {
    paddingBottom: "5%",
  },
};

//make the cards into their own component then map them out into the team section fix the divider and add a cardfooter for links to social medias

const personObj = [
  {
    title: "Orayne Bradshaw - CEO",
    description:
      "Orayne has over 10 years experience managing logistics and overseeingday to day duties",
    image: Brad,
    socialMedias: {
      instagram: "https://www.instagram.com/mrbradness/",
      LinkedIn: "https://www.linkedin.com/in/orayne-bradshaw-03203a169",
      phoneNumber: "1-800-423-2424",
    },
  },
  {
    title: "Khadeen Gordon - CFO",
    description:
      "Orayne has over 10 years experience managing logistics and overseeingday to day duties",
    image: Kady,
    socialMedias: {
      twitter: "https://twitter.com/KhadeenGorgeous",
      instagram: "https://www.instagram.com/khadeengorgeous/",
      email: "KhadeenGordon@gmail.com",
    },
  },
  {
    title: "Rakeem Gordon - Software Engineer",
    description:
      "Orayne has over 10 years experience managing logistics and overseeingday to day duties",
    image: Keem,
    socialMedias: {
      twitter: "https://twitter.com/JusGrimmz",
      instagram: "https://www.instagram.com/jusgrimmzz/",
      facebook: "https://www.facebook.com/keem.gordon/",
    },
  },
];

const TeamSection = (props) => {
  const { teamSectionRef } = props;
  return (
    <div ref={teamSectionRef}>
      <Divider style={styles.divider} variant="middle" />
      <Typography style={styles.title} align="center" variant="h1">
        Our Team
      </Typography>
      <Typography align="center" variant="subtitle2" style={styles.subtitle}>
        Learn about the amazing team that makes all it all possible to deliver
        your vehicle from point A to B
      </Typography>
      <Grid container direction="row" align="center" justify="space-evenly">
        {personObj.map((x, index) => {
          return (
            <Grid key={index} item>
              <ProfileCards
                title={x.title}
                image={x.image}
                description={x.description}
                socialMedias={x.socialMedias}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default TeamSection;
