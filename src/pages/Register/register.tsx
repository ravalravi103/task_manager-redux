import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, ButtonGroup, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { storeUserAction } from "../../store/Actions/user-action";

const Register = () => {
  const [user, setuser] = useState<User>();
  const [file, setfile] = useState();

  const dispatch = useDispatch();

  const handleRegister = async () => {
    dispatch(storeUserAction(user as User, file));
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Card style={{ width: "500px", padding: 30 }}>
          <Typography variant="h6" textAlign="center">
            Register
          </Typography>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              id="Username"
              label="Username"
              placeholder="Enter Username"
              required
              variant="outlined"
              style={{ margin: "10px 0px" }}
              value={user?.userName}
              onChange={(event) => {
                const temp = { ...user };
                temp.userName = event.target.value;
                setuser(temp as User);
              }}
            />
            <TextField
              id="Email"
              label="Email"
              required
              variant="outlined"
              style={{ margin: "10px 0px" }}
              placeholder="Enter Email Address"
              value={user?.email}
              onChange={(event) => {
                const temp = { ...user };
                temp.email = event.target.value;
                setuser(temp as User);
              }}
            />
            <TextField
              id="Phone Number"
              label="Phone Number"
              variant="outlined"
              placeholder="Enter Phone Number"
              style={{ margin: "10px 0px" }}
              value={user?.contactNumber}
              onChange={(event) => {
                const temp = { ...user };
                temp.contactNumber = event.target.value;
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
              value={user?.password}
              onChange={(event) => {
                const temp = { ...user };
                temp.password = event.target.value;
                setuser(temp as User);
              }}
            />

            <input
              type="file"
              onChange={(event) => {
                const {
                  target: { files },
                } = event;
                // @ts-ignore: Object is possibly 'null'.
                setfile(files[0]);
              }}
            ></input>

            <ButtonGroup>
              <Button
                variant="contained"
                disabled={
                  !user?.userName || !user?.email || !user.password
                    ? true
                    : false
                }
                onClick={() => handleRegister()}
              >
                Register
              </Button>
              <Button onClick={() => setuser(undefined)}>Clear</Button>
            </ButtonGroup>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Register;
