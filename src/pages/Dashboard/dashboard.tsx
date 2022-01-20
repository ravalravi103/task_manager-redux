import React from "react";
import { Paper, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import DataCard from "./DataCard/data-card";

const DashBoard = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const { tasks } = useSelector((state: any) => state.taskReducers);

  console.log(tasks);

  return (
    <React.Fragment>
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Grid container>
          <Grid item md={6}>
            <Typography variant="h5">Welocome {user.userName}</Typography>
          </Grid>
          <Grid item md={6} alignItems="flex-end">
            <Typography variant="h5">
              Total Task Created: {tasks?.length}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container style={{ marginTop: "20px", padding: "20px" }}>
        <Grid item md={6}>
          <DataCard
            data={tasks?.filter((task: Task) => task.stage === 0)}
            heading="BackLog"
          ></DataCard>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <Typography variant="h6">
              <DataCard
                data={tasks?.filter((task: Task) => task.stage === 1)}
                heading="Todo"
              ></DataCard>
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container style={{ marginTop: "20px", padding: "20px" }}>
        <Grid item md={6}>
          <DataCard
            data={tasks?.filter((task: Task) => task.stage === 2)}
            heading="OnGoing"
          ></DataCard>
        </Grid>
        <Grid item md={6}>
          <Paper>
            <Typography variant="h6">
              <DataCard
                data={tasks?.filter((task: Task) => task.stage === 3)}
                heading="Done"
              ></DataCard>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DashBoard;
