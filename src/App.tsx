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
        <Paper
          elevation={3}
          className="w-1/2 h-3/4
        flex flex-col
        items-center p-10 !rounded-xl !font-poppins"
          sx={{ gap: 10 / 8 }}
        >
          <div className="mb-[3px]">
            <h1 className="text-[25px] font-semibold">Question 01</h1>
          </div>

          <div className="mb-[15px]">
            <p className="text-center text-xl font-medium">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              quidem similique soluta a deserunt neque ?
            </p>
          </div>

          <div className="self-start">
            <FormControl>
              <RadioGroup defaultValue="" name="rdbButtonsGroup">
                <FormControlLabel
                  value="answer1"
                  control={<Radio />}
                  label="Answer 01"
                />
                <FormControlLabel
                  value="answer2"
                  control={<Radio />}
                  label="Answer 02"
                />
                <FormControlLabel
                  value="answer3"
                  control={<Radio />}
                  label="Answer 03"
                />
                <FormControlLabel
                  value="answer4"
                  control={<Radio />}
                  label="Answer 04"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div>
            <Button
              variant="contained"
              color="success"
              className="!font-poppins"
            >
              Success
            </Button>
          </div>
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default App;
