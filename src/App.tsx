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
        className="w-1/2 h-3/4
        flex flex-col
        items-center p-10 !rounded-xl"
      >
        <div>
          <h1>Question 01</h1>
        </div>

        <div>
          <p>Your Question</p>
        </div>

        <div></div>
      </Paper>
    </div>
  );
};

export default App;
