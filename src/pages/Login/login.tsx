import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getUserAction } from "../../store/Actions/user-action";

type LoginUserDataType = {
  userName: string;
  password: string;
};

const Login = () => {
  const [userLocal, setuser] = useState<LoginUserDataType>();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(getUserAction(userLocal as LoginUserDataType));
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Card style={{ width: "500px", padding: 30 }}>
          <Typography variant="h6" textAlign="center">
            Login
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            autoComplete="false"
          >
            <TextField
              id="Email"
              label="Email "
              required
              placeholder="eg. Info@gmail.com"
              variant="outlined"
              style={{ margin: "10px 0px" }}
              value={userLocal?.userName}
              onChange={(event) => {
                const temp = { ...userLocal };
                temp.userName = event.target.value;
                setuser(temp as User);
              }}
            />

            <TextField
              id="password"
              label="Password"
              required
              type="password"
              placeholder="Enter Password"
              variant="outlined"
              style={{ margin: "10px 0px" }}
              value={userLocal?.password}
              onChange={(event) => {
                const temp = { ...userLocal };
                temp.password = event.target.value;
                setuser(temp as User);
              }}
            />
            <ButtonGroup>
              <Button
                disabled={
                  !userLocal?.userName || !userLocal?.password ? true : false
                }
                onClick={() => handleLogin()}
              >
                Login
              </Button>
              <Button onClick={() => setuser({ userName: "", password: "" })}>
                Clear
              </Button>
            </ButtonGroup>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Login;
