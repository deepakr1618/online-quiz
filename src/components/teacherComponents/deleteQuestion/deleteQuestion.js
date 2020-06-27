import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../state/context";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Paper,
  Grid,
  Typography,
  makeStyles,
  Checkbox,
  Button,
} from "@material-ui/core";

export default function DeleteQuestion() {
  const [state, dispatch] = useContext(AppContext);
  const [questionPool, modifyQuestionPool] = useState([]);
  const [showDialog, setDialog] = useState(false);

  const style = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(2),
      background: "rgba(255, 53, 38,0.1)",
    },
  }));
  const classes = style();
  useEffect(() => {
    console.log(questionPool);
  }, [questionPool]);

  function CheckBoxWrap({ questionid }) {
    const [checked, setChecked] = useState(
      state.deleteQuestions.selected.includes(questionid)
    ); // If the question is already selected, mark it checked
    async function handleChecked(e) {
      const { checked } = e.target;
      if (checked) {
        await dispatch({
          type: "SELECT_QUESTION_TO_DELETE",
          payload: {
            questionid,
          },
        });
      } else {
        await dispatch({
          type: "DESELECT_QUESTION_TO_DELETE",
          payload: {
            questionid,
          },
        });
      }
      setChecked(checked);
    }
    return <Checkbox checked={checked} onChange={handleChecked} />;
  }

  useEffect(() => {
    modifyQuestionPool(state.deleteQuestions.selected);
  }, [state.deleteQuestions.selected]);

  return (
    <div className={classes.container}>
      <Dialog open={showDialog}>
        <DialogTitle>Delete confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure about deleting the selected {questionPool.length}{" "}
            questions.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => {
              setDialog(false);
            }}
          >
            No, dont delete
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: "DELETE_QUESTION" });
              dispatch({
                type: "ADD_TOASTR",
                payload: { message: "Deleted questions" },
              });
              setDialog(false);
            }}
            color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container>
        <Grid item xs={12}>
          <Typography align="left" variant="h6">
            Deleting question from course: {state.deleteQuestions.course}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <p>Please select the question</p>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {state.questions.map((question, i) => (
              <Grid item xs={12} key={i}>
                <Grid container alignItems="center" justify="flex-start">
                  <Grid item xs={1}>
                    <CheckBoxWrap questionid={question.id}></CheckBoxWrap>
                  </Grid>
                  <Grid item xs={11}>
                    <Typography align="left">{question.question}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<DeleteIcon />}
                disabled={questionPool.length == 0}
                onClick={async () => {
                  await setDialog(true);
                }}
              >
                Delete ({questionPool.length})
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="blue"
                endIcon={<HighlightOffIcon />}
                onClick={() => dispatch({ type: "CLOSE_DELETE_QUESTION" })}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
