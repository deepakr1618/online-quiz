import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { AppContext } from "../../../state/context";
import PublishIcon from "@material-ui/icons/Publish";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export default function AddQuestion() {
  const [state, dispatch] = useContext(AppContext);
  const [question, setQuestion] = useState("");
  const style = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(2),
      background: "rgba(25, 255, 75,0.1)",
    },
    inputText: {
      width: "100%",
    },
    buttons: {
      padding: theme.spacing(3),
    },
  }));
  const classes = style();

  async function uploadQuestion() {
    /*
    1. Dispatch action to add question to state management
    2. Show a toastr to the user
    3. Clear the filled data
    */
    await dispatch({
      type: "ADD_QUESTION",
      payload: {
        question,
      },
    });
    await dispatch({
      type: "ADD_TOASTR",
      payload: {
        message: "Question added!",
        severity: "Success",
      },
    });
    setQuestion(""); //Clear out the text field
  }

  function handleSubmit() {
    alert("Submitting");
    uploadQuestion();
  }

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="left" variant="h6">
            Subject selected : {state.addQuestions.course}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <p>Enter the question</p>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Question"
                        multiline
                        rows={2}
                        className={classes.inputText}
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                        color="secondary"
                        variant="filled"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems="center">
                    <Grid item xs={12} sm={6} className={classes.buttons}>
                      <Button
                        startIcon={<PublishIcon />}
                        color="secondary"
                        variant="contained"
                        onClick={uploadQuestion}
                        disabled={question.length === 0}
                      >
                        Upload
                      </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "CLOSE_ADD_QUESTION",
                          });
                        }}
                        type="submit"
                        variant="contained"
                        color="secondary"
                        endIcon={<HighlightOffIcon />}
                      >
                        Close
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
