import React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

export const F_Quiz = () => {
  return (
    <Paper
      elevation={3}
      className="w-1/2 h-3/4
flex flex-col
items-center p-10 !rounded-xl !font-poppins"
      sx={{ gap: 10 / 8 }}
    >
      <div className="mb-[12px] mt-[3px]">
        <h1 className="text-[25px] font-semibold">Question 01</h1>
      </div>

      <div className="mb-[24px]">
        <p className="text-center text-xl font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quidem
          similique soluta a deserunt neque ?
        </p>
      </div>

      <div className="self-start pl-[13px] mb-[20px]">
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

      <div className="w-1/4">
        <Button
          variant="contained"
          fullWidth={true}
          sx={{ fontFamily: "Poppins, sans-serif", bgcolor: "navy" }}
        >
          Submit Answer
        </Button>
      </div>
    </Paper>
  );
};
