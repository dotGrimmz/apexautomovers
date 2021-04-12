import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Review from "./Review";
import mazda from "../../images/mazda.jpg";
import infinityavatar from "../../images/infinityavatar.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const reviewData = [
  {
    avatar: mazda,
    description:
      "i had a great expereince. apex was quick communicative and faily priced. id recomment them over and over again",
    firstName: "rakeem",
    lastName: "gordon",
    date: "2020-08-23T10:00:28.637Z",
  },
  {
    avatar: infinityavatar,
    description:
      "i had a great expereince. apex was quick communicative and faily priced. id recomment them over and over again",
    firstName: "rakeem",
    lastName: "gordon",
    date: "2020-08-23T10:00:28.637Z",
  },
];

const ReviewsSection = (props) => {
  const { reviewSectionRef } = props

  const CustomArrows = (props) => {
    const { className, style, onClick, direction } = props;

    const arrowStyles = {
      ...style,
      fontSize: 50,
      right: direction === "right" ? "10%" : "",
      left: direction === "left" ? "10%" : "",
      color: "white",
      opacity: 0.5,
    };
    if (direction === "right") {
      return (
        <ArrowForwardIosIcon
          onClick={onClick}
          style={arrowStyles}
          className={className}
        />
      );
    } else {
      return (
        <ArrowBackIosIcon
          onClick={onClick}
          style={arrowStyles}
          className={className}
        />
      );
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <CustomArrows direction="right" />,
    prevArrow: <CustomArrows direction="left" />,
  };

  const styles = {
    container: {
      padding: "80px 0",
      "& $cardDescription": {
        fontStyle: "italic",
      },
      "& .slickDots": {
        display: "none !important",
      },
      // "& $cardDescription": {
      //   color: "grey",
      // },
      "& $cardTitle": {
        color: "#FFF",
      },
      backgroundSize: "550% 450%",
      backgroundColor: "#343434",
      background:
        "radial-gradient(ellipse at center," +
        "#585858" +
        " 0," +
        "#232323" +
        " 100%)",
    },
    wrapper: {
      "@media (minWidth: 576px)": {
        maxWidth: "540px",
      },
      "@media (minWidth: 768px)": {
        maxWidth: "720px",
      },
      "@media (minWidth: 992px)": {
        maxWidth: "960px",
      },
      "@media (minWidth: 1200px)": {
        maxWidth: "1140px",
      },
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
    },
    card: {
      width: "300ox",
    },
  };

  return (
    <div style={styles.container} id="reviews-section" ref={reviewSectionRef}>
      <div style={styles.wrapper}>
        <Grid container>
          <Grid xs={12} item>
            <Slider {...settings}>
              {reviewData.map((review, index) => {
                return (
                  <Review
                    key={index}
                    avatar={review.avatar}
                    description={review.description}
                    firstName={review.firstName}
                    lastName={review.lastName}
                    date={review.date}
                  />
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ReviewsSection;
