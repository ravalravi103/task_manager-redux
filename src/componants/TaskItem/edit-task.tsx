import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { editTaskCreaators } from "../../store/Actions/task-action";

type EditTaskPropType = {
  open: boolean;
  onClose: () => void;
  oldTask: Task;
};

const EditTask = ({ oldTask, onClose, open }: EditTaskPropType) => {
  const [task, setTask] = useState<Task>(oldTask);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Dialog open={open} onClose={() => onClose()} fullWidth>
        <DialogTitle id="alert-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            id="Task"
            variant="outlined"
            value={task.name}
            fullWidth
            onChange={(event) => {
              setTask({ ...task, name: event?.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>Close</Button>
          <Button
            onClick={() => {
              dispatch(editTaskCreaators(task));
              onClose();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default EditTask;
