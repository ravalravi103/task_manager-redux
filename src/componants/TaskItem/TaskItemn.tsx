import { Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { ImNext } from "react-icons/im";
import { ImBackward } from "react-icons/im";
import {
  deleteActionCreator,
  moveBackwordCreator,
  moveForwordActionCreator,
} from "../../store/Actions/task-action";
import { useDispatch } from "react-redux";
import EditTask from "./edit-task";
type TaskItemPropType = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemPropType) => {
  const { name, stage } = task;
  const dispatch = useDispatch();

  const [isEdit, setisEdit] = useState<Task>();

  const handleBackword = () => {
    dispatch(moveBackwordCreator(task));
  };

  const handleForword = () => {
    dispatch(moveForwordActionCreator(task));
  };

  return (
    <React.Fragment>
      {isEdit ? (
        <EditTask
          open={isEdit ? true : false}
          onClose={() => setisEdit(undefined)}
          oldTask={isEdit}
        ></EditTask>
      ) : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <Typography>{name}</Typography>
        <div>
          <IconButton disabled={stage === 0} onClick={() => handleBackword()}>
            <ImBackward />
          </IconButton>
          <IconButton disabled={stage === 3} onClick={() => handleForword()}>
            <ImNext></ImNext>
          </IconButton>
          <IconButton disabled={stage === 3} onClick={() => setisEdit(task)}>
            <GrEdit></GrEdit>
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => dispatch(deleteActionCreator(task.id as string))}
          >
            <AiFillDelete />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TaskItem;
