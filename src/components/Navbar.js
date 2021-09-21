import { AppBar, Typography, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ marginBottom: "80px" }}>
      <AppBar>
        <Toolbar>
          <Typography style={{ flexGrow: "1" }}>Spacestagram</Typography>
          <Toolbar>
            <Typography style={{ marginRight: "25px" }}>
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </NavLink>
            </Typography>
            <Typography>
              <NavLink
                to="/Favorites"
                style={{ textDecoration: "none", color: "white" }}
              >
                Favorites
              </NavLink>
            </Typography>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

{
}
