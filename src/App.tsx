import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Paper } from "@mui/material";

const App = () => {
  return (
    <div
      id="App"
      className="bg-customColors-100 w-full 
      h-screen flex items-center justify-center"
    >
      <Paper
        elevation={3}
        className="w-1/3 h-1/2 !bg-slate-900 
        flex flex-col justify-between items-center p-10"
      ></Paper>
    </div>
  );
};

export default App;
