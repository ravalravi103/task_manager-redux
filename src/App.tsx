import React from "react";
import Navbar from "./componants/navbar/navbar";
import MyAppRoutes from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <MyAppRoutes></MyAppRoutes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
