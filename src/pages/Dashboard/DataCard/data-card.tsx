import React from "react";
import { Paper, Typography } from "@mui/material";
import Tabledata from "../dataTable/data-table";

type DataCardPropType = {
  heading: string;
  data: Task[];
};

const DataCard = ({ data, heading }: DataCardPropType) => {
  return (
    <React.Fragment>
      <Paper style={{ padding: "30px" }}>
        <Typography variant="h6">{heading}</Typography>
        <Tabledata data={data}></Tabledata>
      </Paper>
    </React.Fragment>
  );
};

export default DataCard;
