// Import necessary components and styles
import React, { useState } from "react";
import { Button, Typography, Grid, Box } from "@mui/material";
import { Headphones, PlayArrow } from "@mui/icons-material";
import "../styles/AnimatiAi.css";
import "../styles/Aipi.css";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.jpeg";
import image from "../assets/image.webp";
import { useNavigate } from "react-router-dom";
import AnimationAi from "./Aipinanimation";

// Define Aipin component
export const Aipin = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Handle button click action
    // For example, navigate to another page
    navigate("/another-page");
  };

  return (
    <div
      className={`aipin-container ${isHovered ? "hovered" : ""}`}
      style={{
        backgroundColor: "#282828",
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overlay"></div>

      <Grid container className="content" spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimationAi />

          <Typography
            className="header-h4"
            variant="h4"
            color={"white"}
            fontWeight={800}
            fontSize={50}
          >
            ai pin{" "}
          </Typography>
          <Typography
            className="header-body2"
            variant="body2"
            fontSize={34}
            color={"gray"}
            fontWeight={400}
          >
            starting at $ 99
          </Typography>
          <Typography
            className="header-body2"
            variant="body2"
            fontWeight={400}
            color={"gray"}
          >
            order today, pay over time
          </Typography>
        </Grid>
      </Grid>
      <Typography
        sx={{
          ml: "15%",
          mt: "7%",
        }}
        className="watch-text"
        variant="body1"
        fontWeight={700}
        display={"flex"}
        color={"white"}
      >
        watch the video
      </Typography>
      <Box
        sx={{
          justifyContent: "space-between",
          flexDirection: "row",
          display: "flex",
          position: "absolute",
          height: "100px",
          width: "90vw",
          marginLeft: "5%",
          marginTop: "100px",
        }}
      >
        <Button
          className="play-button"
          sx={{
            height: "50%",
            color: "white",
            textTransform: "none",
            fontSize: "17px",
            backgroundColor: "transparent",
            backgroundImage: `url(${image})`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
            width: "100px",
          }}
          variant="contained"
          startIcon={
            <PlayArrow
              style={{
                marginLeft: "-40px",
              }}
              fontSize="medium"
            />
          }
          onClick={handleButtonClick}
        ></Button>

        <Button
          className="order-button"
          sx={{
            height: "50%",
            backgroundColor: "#4fdbc9",
            color: "black",
            textTransform: "none",
            fontSize: "17px",
            "&:hover": {
              backgroundColor: "skyblue",
            },
            borderRadius: "10px",
          }}
          variant="contained"
          endIcon={<Headphones fontSize="large" />}
          onClick={handleButtonClick}
        >
          Order
        </Button>
      </Box>
    </div>
  );
};
