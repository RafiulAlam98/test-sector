import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { Link } from "react-router-dom";

function DrawerAppBar(props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              to="/home"
              sx={{ p: 2 }}
              style={{
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link to="/user" style={{ textDecoration: "none" }}>
              User
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ p: 2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
