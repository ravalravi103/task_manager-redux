import React from "react";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import { navArr } from "./nav-utils";
import { Link } from "react-router-dom";

type SiderPropType = {
  open: boolean;
};

const Sider = ({ open }: SiderPropType) => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem("user") as string);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => {}}>
        <List>
          {navArr.map(({ title, to }) =>
            user && title === "Login" ? (
              <Link to={to} className="sider_link">
                <ListItem>
                  <ListItemButton>{title}</ListItemButton>
                </ListItem>
              </Link>
            ) : (
              <Link to={to} className="sider_link">
                <ListItem className="sider_link_text">
                  <ListItemButton>{title}</ListItemButton>
                </ListItem>
              </Link>
            )
          )}
          {user ? <Avatar alt="Remy Sharp" src={user.profile_pic} /> : null}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Sider;
