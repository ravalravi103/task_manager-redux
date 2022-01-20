import {
  GET_ALL_TASK,
  ADD_TASK,
  DELETE_TASK,
  MOVE_FORWORD,
  MOVE_BACKWORD,
  EDIT_TASK,
} from "../Actions/task-action-type";

export const taskReducers = (state = {}, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TASK:
      return { loading: false, tasks: [...payload] };
    case ADD_TASK:
      return { loading: false, tasks: [...payload] };
    case DELETE_TASK:
      return { loading: false, tasks: [...payload] };
    case MOVE_FORWORD:
      return { loading: false, tasks: [...payload] };
    case MOVE_BACKWORD:
      return { loading: false, tasks: [...payload] };
    case EDIT_TASK:
      return { loading: false, tasks: [...payload] };
    default:
      return { ...state, ...payload };
  }
};
