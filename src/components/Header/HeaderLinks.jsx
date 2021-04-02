import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "./CustomDropdown";
import { makeStyles } from "@material-ui/core/styles";
import Apps from "@material-ui/icons/Apps";

import styles from "../../assets/components/headerLinksStyle";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  // const easeInOutQuad = (t, b, c, d) => {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };

  // const smoothScroll = (e, target) => {
  //   if (window.location.pathname === "/sections") {
  //     var isMobile = navigator.userAgent.match(
  //       /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
  //     );
  //     if (isMobile) {
  //       // if we are on mobile device the scroll into view will be managed by the browser
  //     } else {
  //       e.preventDefault();
  //       var targetScroll = document.getElementById(target);
  //       scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  //     }
  //   }
  // };

  // const scrollGo = (element, to, duration) => {
  //   var start = element.scrollTop,
  //     change = to - start,
  //     currentTime = 0,
  //     increment = 20;

  //   var animateScroll = function () {
  //     currentTime += increment;
  //     var val = easeInOutQuad(currentTime, start, change, duration);
  //     element.scrollTop = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // };

  const { dropdownHoverColor, handleReviewsScrollIntoView, handleTeamScrollIntoView, handleServicesScrollIntoView } = props;
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem} name="services">
        <CustomDropdown
          handleClick={handleServicesScrollIntoView}
          name="services"
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[]}
        />
      </ListItem>
      <ListItem className={classes.listItem} name="reviews">
        <CustomDropdown
          handleClick={handleReviewsScrollIntoView}
          name="reviews"
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Reviews"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          name="about-us"
          handleClick={handleTeamScrollIntoView}
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="about us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[]}
        />
      </ListItem>
    </List>
  );
};

export default HeaderLinks;
