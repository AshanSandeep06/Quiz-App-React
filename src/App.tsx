import React from "react";
import logo from "./logo.svg";
import "./App.css";
import C_Quiz from "./components/Class_based";
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
        className="w-full bg-[#0047ab]
      h-screen flex items-center justify-center"
      >
        <C_Quiz />
      </div>
    </ThemeProvider>
  );
};

export default App;
