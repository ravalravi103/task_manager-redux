import { SNAKEBAR_CLOSE, SNAKEBAR_OPRN } from "../Actions/snakebar-action";

const initState = {
  snakebarOpen: false,
  message: "",
  type: "",
};

export const snakebarReducers = (state = initState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SNAKEBAR_OPRN:
      return {
        snakebarOpen: payload.open,
        message: payload.message,
        type: payload.type,
      };
    case SNAKEBAR_CLOSE:
      return {
        snakebarOpen: payload.open,
        message: undefined,
        type: payload.type,
      };
    default:
      return { ...state };
  }
};
