import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React, { Component } from "react";
import { questionDetails } from "../../types/QuestionDetails";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 15,
  },
});

type C_QuizProps = {};

type C_QuizState = {
  questionList: questionDetails[];
};

export default class C_Quiz extends Component<C_QuizProps, C_QuizState> {
  constructor(props: C_QuizProps) {
    super(props);

    this.state = {
      questionList: [
        {
          id: "01",
          question:
            "Which of the following championships has John Cena never held?",
          answers: [
            "WWE Championship",
            "United States Championship",
            "Intercontinental Championship",
            "World Heavyweight Championship",
          ],
          correctAnswer: "Intercontinental Championship",
          submittedAnswer: "",
          answerIsCorrect: false,
        },

        {
          id: "02",
          question:
            "Who is the youngest World Heavyweight Champion in WWE History?",
          answers: [
            "Austion Theory",
            "Randy Orton",
            "Brock Lesnar",
            "Drew Mcintyre",
          ],
          correctAnswer: "Randy Orton",
          submittedAnswer: "",
          answerIsCorrect: false,
        },

        {
          id: "03",
          question:
            "Who is the youngest World Heavyweight Champion in WWE History?",
          answers: [
            "Austion Theory",
            "Randy Orton",
            "Brock Lesnar",
            "Drew Mcintyre",
          ],
          correctAnswer: "Randy Orton",
          submittedAnswer: "",
          answerIsCorrect: false,
        },
      ],
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Paper
          elevation={3}
          className="w-1/2 h-3/4 flex flex-col items-center p-10 !rounded-xl 
          !font-poppins bg-customColors-100"
          sx={{ gap: 10 / 8 }}
        >
          <div className="mb-[12px]">
            <h1 className="text-[25px] font-semibold">Question 01</h1>
          </div>

          <div className="mb-[24px]">
            <p className="text-center text-[21px] font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              temporibus ducimus maiores officiis unde quos?
            </p>
          </div>

          <div className="self-start pl-[13px] mb-[20px]">
            <FormControl>
              <RadioGroup defaultValue="" name="rdbButtonsGroup">
                <FormControlLabel
                  value="answer1"
                  control={<Radio />}
                  label="Answer 01"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  value="answer2"
                  control={<Radio />}
                  label="Answer 02"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  value="answer3"
                  control={<Radio />}
                  label="Answer 03"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  value="answer4"
                  control={<Radio />}
                  label="Answer 04"
                  className="!text-[18px]"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="w-1/4">
            <Button
              variant="contained"
              fullWidth={true}
              sx={{
                fontFamily: "Poppins, sans-serif",
                bgcolor: "navy",
                fontSize: 16,
                textTransform: "none",
              }}
            >
              Submit Answer
            </Button>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}
