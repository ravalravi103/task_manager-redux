import {
  GET_ALL_TASK,
  ADD_TASK,
  DELETE_TASK,
  MOVE_FORWORD,
  MOVE_BACKWORD,
  EDIT_TASK,
} from "./task-action-type";

import { store } from "../store";
import { axiosInst } from "../../apis/axios";

//  Get All Task
const taskAction = (payload: Task[]) => ({
  type: GET_ALL_TASK,
  payload: payload,
});

export const getTaskActionCreator = () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  return (disptch: any) => {
    axiosInst
      .get(`/tasks?created_by=${user.userName}`)
      .then((response) => disptch(taskAction(response.data)))
      .catch(console.log);
  };
};

// Add Task

const addTask = (payload: Task[]) => ({
  type: ADD_TASK,
  payload: payload,
});

export const addTaskCreator = (task: Task) => {
  return (disptch: any) => {
    axiosInst
      .post("/tasks", task)
      .then(({ data }) => {
        const {
          taskReducers: { tasks },
        } = store.getState();

        return disptch(addTask([...tasks, data]));
      })
      .catch(console.log);
  };
};

const deleteTask = (payload: Task[]) => ({
  type: DELETE_TASK,
  payload: payload,
});

export const deleteActionCreator = (id: string) => {
  return (dispatch: any) => {
    axiosInst
      .delete(`tasks/${id}`)
      .then(({ data }) => {
        const {
          taskReducers: { tasks },
        } = store.getState();
        return dispatch(
          deleteTask(tasks.filter((task: Task) => task.id !== id))
        );
      })
      .catch(console.log);
  };
};

const moveForword = (payload: Task[]) => ({
  type: MOVE_FORWORD,
  payload: payload,
});

export const moveForwordActionCreator = (task: Task) => {
  return (dispatch: any) => {
    axiosInst
      .put(`/tasks/${task.id}`, {
        ...task,
        stage: task.stage + 1,
      })
      .then(() => {
        const {
          taskReducers: { tasks },
        } = store.getState();

        return dispatch(
          moveForword(
            tasks.map((t: Task) =>
              t.id === task.id ? { ...task, stage: task.stage + 1 } : t
            )
          )
        );
      })
      .catch(console.log);
  };
};

const moveBackword = (payload: Task[]) => ({
  type: MOVE_BACKWORD,
  payload,
});

export const moveBackwordCreator = (task: Task) => {
  return (dispatch: any) => {
    axiosInst
      .put(`/tasks/${task.id}`, task)
      .then(() => {
        const {
          taskReducers: { tasks },
        } = store.getState();

        return dispatch(
          moveBackword(
            tasks.map((t: Task) =>
              t.id === task.id ? { ...task, stage: task.stage - 1 } : t
            )
          )
        );
      })
      .catch(console.log);
  };
};

const editTask = (payload: Task[]) => ({
  type: EDIT_TASK,
  payload,
});

export const editTaskCreaators = (task: Task) => {
  return (dispatch: any) => {
    axiosInst
      .put(`/tasks/${task.id}`, task)
      .then(() => {
        const {
          taskReducers: { tasks },
        } = store.getState();

        dispatch(
          editTask(tasks.map((t: Task) => (t.id === task.id ? task : t)))
        );
      })
      .catch(console.log);
  };
};
