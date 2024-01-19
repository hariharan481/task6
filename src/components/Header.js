import React from "react";
import videoBg1 from "../../src/assets/videoBg1.mp4";
import "../styles/Header.css";
import { Button, Typography, Grid } from "@mui/material";
import { ArrowForward, Headphones, PlayArrow } from "@mui/icons-material";
import Navbar from "./Navbar";
import Header2 from "./Header2";

export const Header = () => {
  const buttonGroupStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    color: "white",
    marginTop: "30px",
    position: "absolute",
    bottom: "80px",
    borderRadius: "60px",
  };

  const watchFilmStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    left: "30px",
    alignItems: "center",
    bottom: "calc(500px + 0px)",

    // Adjusted for 40px raise on small screens
  };

  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg1} autoPlay loop muted />

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
          <Typography
            variant="h4"
            color={"white"}
            fontWeight={700}
            fontSize={50}
          >
            ai pin
          </Typography>
          <Typography
            variant="body2"
            fontSize={30}
            color={"white"}
            fontWeight={400}
          >
            starting at $ 99
          </Typography>
          <Typography variant="body2" fontWeight={400} color={"white"}>
            order today, pay over time
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          className="btn groups"
          style={buttonGroupStyle}
        >
          <Button
            endIcon={<ArrowForward sx={{ width: "19px" }} />}
            variant="contained"
            sx={{
              backgroundColor: "rgba(128, 128, 128, 0.9)",
              color: "white",
              fontWeight: "30px",
              textTransform: "none",
              height: "80px",
              width: "200px",
              borderRadius: "30px",
              fontSize: "17px",
              "&:hover": {
                cursor: "default",
                backgroundColor: "rgba(128, 128, 128, 0.9)",
              },
            }}
          >
            Learn more
          </Button>
          <Button
            endIcon={<Headphones />}
            variant="contained"
            sx={{
              backgroundColor: "#4fdbc9",
              color: "black",
              height: "80px",
              width: "200px",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "17px",
              "&:hover": {
                cursor: "default",
                backgroundColor: "#4fdbc9",
              },
            }}
          >
            Order
          </Button>
        </Grid>
        <Grid item xs={12} md={8} sx={watchFilmStyle}>
          <Typography variant="body2" color={"white"}>
            Watch the Film
          </Typography>
          <PlayArrow
            fontSize="large"
            style={{ color: "white", marginLeft: "8px" }}
          />
        </Grid>
      </Grid>
      <Header2 />
    </div>
  );
};
