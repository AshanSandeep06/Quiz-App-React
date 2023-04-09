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
import $ from "jquery";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 15,
  },
});

type C_QuizProps = {};

type C_QuizState = {
  id?: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  correctAnswerIndex: number;
  submittedAnswer: string;
  submittedAnswerIndex: number;
  answerIsCorrect: boolean;
  questionList: questionDetails[];
};

export default class C_Quiz extends Component<C_QuizProps, C_QuizState> {
  constructor(props: C_QuizProps) {
    super(props);

    this.state = {
      id: "01",
      question: "",
      answers: [],
      correctAnswer: "",
      correctAnswerIndex: 0,
      submittedAnswer: "",
      submittedAnswerIndex: 0,
      answerIsCorrect: false,
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
          correctAnswerIndex: 3,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
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
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "03",
          question:
            "Who has the Greatest Money in the Bank Cash In of All time in Wrestling World?",
          answers: ["Seth Rollins", "Edge", "Dolph Ziggler", "Big E"],
          correctAnswer: "Seth Rollins",
          correctAnswerIndex: 1,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "04",
          question:
            'Who had the greatest moment dubbed as the "Heist of the Century"?',
          answers: ["Roman Reigns", "John Cena", "Seth Rollins", "CM Punk"],
          correctAnswer: "Seth Rollins",
          correctAnswerIndex: 3,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "05",
          question:
            "Who is the better in-ring Technician among of the wrestlers in WWE?",
          answers: ["Roman Reigns", "Seth Rollins", "Undertaker", "John Cena"],
          correctAnswer: "Seth Rollins",
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "06",
          question:
            "who had a highly successful career, Technical skills and Charisma in NJPW?",
          answers: [
            "Jay White",
            "Kazuchika Okada",
            "Will Osprey",
            "The Great Muta",
          ],
          correctAnswer: "Kazuchika Okada",
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "07",
          question: "Which is the Greatest Faction of All Time?",
          answers: [
            "D-Generation X",
            "The Shield",
            "Evolution",
            "The Judgement Day",
          ],
          correctAnswer: "D-Generation X",
          correctAnswerIndex: 1,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "08",
          question:
            "Who had the hard-hitting Five star match at WrestleMania 39 goes Hollywood?",
          answers: ["Seth Rollins", "Brock Lesnar", "Gunther", "John Cena"],
          correctAnswer: "Gunther",
          correctAnswerIndex: 3,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "09",
          question: "Who is the G.O.A.T ?",
          answers: ["Roman Reigns", "John Cena", "Triple H", "Hulk Hogan"],
          correctAnswer: "John Cena",
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "10",
          question: 'Which wrestler has this "Sweet Chin Music" Finisher?',
          answers: ["Bret Hart", "The Rock", "Shawn Michaels", "Chris Jericho"],
          correctAnswer: "Shawn Michaels",
          correctAnswerIndex: 3,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "11",
          question:
            'Which Finisher move dubbed as "The Three Most Dangerous Letters in Sports Entertainment" ?',
          answers: ["RKO", "STF", "DDT", "GTS"],
          correctAnswer: "RKO",
          correctAnswerIndex: 1,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "12",
          question: "Who is the inaugural Universal Champion in WWE?",
          answers: ["Seth Rollins", "Goldberg", "Roman Reigns", "Finn Balor"],
          correctAnswer: "Finn Balor",
          correctAnswerIndex: 4,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "13",
          question:
            "Who is the WWE Wrestler has beat Brock Lesnar in Summerslam 2019 to capture the Universal Championship as his second World Title Reign?",
          answers: ["Kurt Angle", "Roman Reigns", "Undertaker", "Seth Rollins"],
          correctAnswer: "Seth Rollins",
          correctAnswerIndex: 4,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "14",
          question:
            "Who is the WWE Wrestler had beat Brock Lesnar in Wrestlemania 2020 under Five Minutes ?",
          answers: [
            "Eddie Guevero",
            "Kurt Angle",
            "Drew Mcintyre",
            "Seth Rollins",
          ],
          correctAnswer: "Drew Mcintyre",
          correctAnswerIndex: 3,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "15",
          question:
            "Who was the WWE Wrestler conquered and beat down John Cena at Summerslam 2014 by giving  F5s and 16 German Suplexes to Win the WWE World HeavyWieght Championship?",
          answers: ["Brock Lesnar", "Randy Orton", "Big Show", "Kurt Angle"],
          correctAnswer: "Brock Lesnar",
          correctAnswerIndex: 1,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "16",
          question:
            "Who was the WWE Wrestler who costs and distracts Drew Mcintyre to lose the Undisputed Universal Championship at Clash at the Castle defeated by Roman Reigns ?",
          answers: ["The Rock", "Sami Zayn", "Jey Uso", "Solo Sikoa"],
          correctAnswer: "Solo Sikoa",
          correctAnswerIndex: 4,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "17",
          question:
            "Who is the Master of Countering or reversing a Spear into a Pedigree ?",
          answers: ["Roman Reigns", "Edge", "Bobby Lashely", "Seth Rollins"],
          correctAnswer: "Seth Rollins",
          correctAnswerIndex: 4,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "18",
          question:
            "Who has the Most Wrestlemania Consecutive Winning Streak of All Time ?",
          answers: [
            "Bruno Sammartino",
            "The Undertaker",
            "Stone Cold Steve Austin",
            "Andre the Giant",
          ],
          correctAnswer: "The Undertaker",
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "19",
          question:
            "Who was the First-ever Father and Son Tag Team Champions in WWE ?",
          answers: [
            "Vincent Kennedy McMahon & Shane Mcmahon",
            "Rey Mysterio & Dominik Mysterio",
            "Dusty Rhodes & Cody Rhodes",
            "Rocky Johnson & The Rock",
          ],
          correctAnswer: "Rey Mysterio & Dominik Mysterio",
          correctAnswerIndex: 2,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },

        {
          id: "20",
          question:
            "Who has the Longest Reigning Historic Universal Championship Title Reign?",
          answers: [
            "Brock Lesnar",
            "Seth Rollins",
            "Kevin Owens",
            "Roman Reigns",
          ],
          correctAnswer: "Roman Reigns",
          correctAnswerIndex: 4,
          submittedAnswer: "",
          submittedAnswerIndex: 0,
          answerIsCorrect: false,
        },
      ],
    };
  }

  handleClickSubmit = () => {
    if ($("input").is(":checked")) {
      console.log("Clicked..!");

      //   $("input").prop('checked', false);
      //   $("input").removeAttr('checked');

      //How to get a value of a radio button when it is checked
      // $("input[name='answer3'][value='3']").prop("checked");
      // console.log($('input[name="answer3"]:checked').val());
      // console.log($('input[name="answer3"]:checked').parent().parent().children(":eq(1)").text());
    }
  };

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
              <RadioGroup
                id="rdbButtonGroup"
                defaultValue=""
                name="rdbButtonsGroup"
              >
                <FormControlLabel
                  control={
                    <Radio value="1" name="answer" className="radio-buttons" />
                  }
                  label="Answer 01"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  control={
                    <Radio value="2" name="answer" className="radio-buttons" />
                  }
                  label="Answer 02"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  control={
                    <Radio value="3" name="answer" className="radio-buttons" />
                  }
                  label="Answer 03"
                  className="!text-[18px]"
                />
                <FormControlLabel
                  control={
                    <Radio value="4" name="answer" className="radio-buttons" />
                  }
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
              onClick={this.handleClickSubmit}
            >
              Submit Answer
            </Button>
          </div>
        </Paper>
      </ThemeProvider>
    );
  }
}
