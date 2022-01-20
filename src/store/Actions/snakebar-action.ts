export const SNAKEBAR_OPRN = "SNAKEBAR_OPEN";
export const SNAKEBAR_CLOSE = "SNAKEBAR_CLOSE";

const snakebaropen = (payload: any) => ({
  type: SNAKEBAR_OPRN,
  payload: payload,
});

const snakebarClose = () => ({
  type: SNAKEBAR_CLOSE,
});

export const snakebarOpenAction = ({ message, type }: any) => {
  return (dispatch: any) => {
    dispatch(snakebaropen({ message, type }));
  };
};

export const snakebarCloseAction = () => {
  return (dispatch: any) => {
    dispatch(snakebarClose());
  };
};
