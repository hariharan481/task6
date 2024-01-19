import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Add,
  Close,
  AccountCircleSharp,
  ArrowForwardIos,
} from "@mui/icons-material";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Switch } from "@mui/material";
import { Header } from "./Header";
import Header2 from "./Header2";

const drawerWidth = "100%";
const navItems = ["ai pin", "shop", "about us", "support", "account"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavItemClick = () => {
    // Close the drawer (if it's open)
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <Box sx={{ textAlign: "start", marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Box>
            <Button sx={{ color: "white", gap: "30px" }}>
              <AccountCircleSharp />
              <Typography variant="h6" color={"white"} textTransform={"none"}>
                sign in
              </Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerToggle}
          >
            <Close size="40px" sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "start",
                "&:hover": {
                  color: "white",
                  fontSize: "40px",
                },
              }}
            >
              {index === 0 && (
                <>
                  <Typography
                    variant="h6"
                    color="grey"
                    sx={{
                      marginRight: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    ai pin
                  </Typography>
                  <ArrowForwardIos sx={{ width: "20px" }} color="white" />
                </>
              )}
              {index === 2 && (
                <>
                  <Typography
                    variant="h6"
                    color="grey"
                    sx={{
                      marginRight: "10px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    join Us
                  </Typography>
                  <ArrowForwardIos sx={{ width: "20px" }} color="white" />
                </>
              )}
              {index !== 0 && index !== 2 && (
                <ListItemText
                  primary={item}
                  sx={{
                    color: isSmallScreen ? "grey" : "white",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      {" "}
      <Router>
        {" "}
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position={isSmallScreen ? "fixed" : "fixed"}
            sx={{
              bottom: isSmallScreen ? "auto" : 0,
              backgroundColor: "black",
              height: "70px",
              display: "flex",
              borderTop: "0.5px solid white",
              top: isSmallScreen ? 0 : "auto",
            }}
          >
            <Toolbar sx={{}}>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  xs: "none",
                  sm: "block",
                }}
              >
                <img
                  src="https://hu.ma.ne/logo.png"
                  style={{ height: "40px", marginRight: "10px" }}
                  alt="Logo"
                />
                huma.ne
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    component={RouterLink}
                    to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                    sx={{
                      color: isSmallScreen ? "grey" : "grey",
                      fontSize: "20px",
                      textTransform: "none",
                      margin: "0 20px",
                      "&:hover": {
                        color: "white",
                      },
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Box>
              {isSmallScreen && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ ml: "auto" }}
                >
                  {mobileOpen ? (
                    <Close size="40px" sx={{ color: "white" }} />
                  ) : (
                    <Add size="40px" sx={{ color: "grey" }} />
                  )}
                </IconButton>
              )}
            </Toolbar>
          </AppBar>
          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                  top: 0,
                  backgroundColor: "black",
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
