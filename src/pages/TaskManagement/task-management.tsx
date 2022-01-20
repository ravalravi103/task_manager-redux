import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Paper,
  Card,
  Typography,
} from "@mui/material";
import TaskItem from "../../componants/TaskItem/TaskItemn";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getTaskActionCreator,
  addTaskCreator,
} from "../../store/Actions/task-action";
const TaskManagement = () => {
  const [taskInput, settaskInput] = useState("");
  const dispatch = useDispatch();
  const { tasks } = useSelector((state: any) => state.taskReducers);
  const user = JSON.parse(localStorage.getItem("user") as string);

  console.log(tasks);

  useEffect(() => {
    dispatch(getTaskActionCreator());
  }, [dispatch]);

  const handleOnClick = () => {
    settaskInput("");
    dispatch(
      addTaskCreator({
        name: taskInput,
        stage: 0,
        created_at: moment().format(),
        created_by: user.userName,
        updated_at: moment().format(),
      })
    );
  };

  return (
    <React.Fragment>
      <Paper>
        <form
          autoComplete="false"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <TextField
            id="Create Task"
            label="Create Task"
            placeholder="Create Task"
            variant="outlined"
            style={{ margin: "10px 0px", flex: 0.4 }}
            size="small"
            value={taskInput}
            onChange={(e: any) => settaskInput(e.target.value)}
          />
          <Button
            style={{ margin: "0px 10px" }}
            variant="contained"
            size="large"
            disabled={!taskInput}
            onClick={() => handleOnClick()}
          >
            Add Task
          </Button>
        </form>
      </Paper>
      <Paper style={{ marginTop: "30px" }}>
        <Grid container>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card style={{ margin: "10px", padding: "10px" }}>
              <Typography variant="h6" align="center">
                Backlog Task
              </Typography>
              {tasks?.map((list: Task) =>
                list.stage === 0 ? <TaskItem task={list}></TaskItem> : null
              )}
            </Card>
          </Grid>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card style={{ margin: "10px" }}>
              <Typography variant="h6" align="center">
                Todo Task
              </Typography>
              {tasks?.map((list: Task) =>
                list.stage === 1 ? <TaskItem task={list}></TaskItem> : null
              )}
            </Card>
          </Grid>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card style={{ margin: "10px", padding: "10px" }}>
              <Typography variant="h6" align="center">
                Ongoing Task
              </Typography>
              {tasks?.map((list: Task) =>
                list.stage === 2 ? <TaskItem task={list}></TaskItem> : null
              )}
            </Card>
          </Grid>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card style={{ margin: "10px", padding: "10px" }}>
              <Typography variant="h6" align="center">
                Done Task
              </Typography>
              {tasks?.map((list: Task) =>
                list.stage === 3 ? <TaskItem task={list}></TaskItem> : null
              )}
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};

export default TaskManagement;
