import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Quiz from "./components/Class_based";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        id="App"
        className="bg-customColors-100 w-full 
      h-screen flex items-center justify-center"
      >
        <Quiz />
      </div>
    </ThemeProvider>
  );
};

export default App;
