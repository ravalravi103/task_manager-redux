import React from "react";
import AppLink from "./AppLink/AppLink";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import { navArr } from "./nav-utils";
import { useTheme } from "@mui/material/styles";
import Sider from "./sider";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const theme = useTheme();

  console.log(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        {/* <Sider open={theme.breakpoints.down("sm") ? true : false}></Sider> */}
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              -
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Manager
            </Typography>

            {navArr.map(({ title, to }) =>
              user && title === "Login" ? (
                <AppLink title="Logout" to={to} />
              ) : (
                <AppLink title={title} to={to} />
              )
            )}
            {user ? <Avatar alt="Remy Sharp" src={user.profile_pic} /> : null}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
