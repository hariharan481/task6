import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import { Header } from "./components/Header";
import Header2 from "./components/Header2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { Shop } from "./components/Shop";
import { Aboutus } from "./components/Aboutus";
import { Support } from "./components/Support";
import { Account } from "./components/Account";
import { Aipin } from "./components/Aipin";
import { Scrollpage } from "./components/ScrollPage";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route
            path="/aipin"
            element={<Scrollpage />} // Replace with your actual AipinPgae component
          />
          <Route
            path="/shop"
            element={<Shop />} // Replace with your actual AipinPgae component
          />
          <Route
            path="/aboutus"
            element={<Aboutus />} // Replace with your actual AipinPgae component
          />
          <Route
            path="/support"
            element={<Support />} // Replace with your actual AipinPgae component
          />
          <Route
            path="/account"
            element={<Account />} // Replace with your actual AipinPgae component
          />

          {/* Add more Route elements for other pages */}

          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
