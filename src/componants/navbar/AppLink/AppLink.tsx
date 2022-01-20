import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

type AppLinkPropType = {
  title: string;
  to: string;
};

const AppLink = ({ title, to }: AppLinkPropType) => {
  return (
    <React.Fragment>
      <Link to={to} className="nav_link">
        <Button
          color="inherit"
          onClick={() => {
            if (title === "Logout") {
              localStorage.removeItem("user");
              localStorage.removeItem("accessToken");
            }
          }}
        >
          {title}
        </Button>
      </Link>
    </React.Fragment>
  );
};

export default AppLink;
