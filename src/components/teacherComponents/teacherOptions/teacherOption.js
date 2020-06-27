import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../state/context";
import {
  Grid,
  Select,
  MenuItem,
  makeStyles,
  Paper,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddQuestion from "../addQuestion/addQuestion";
import DeleteQuestion from "../deleteQuestion/deleteQuestion";

export default function TeacherOption() {
  const [state, dispatch] = useContext(AppContext);
  const [showAddQuestion, modifyShowAddQuestion] = useState(
    state.addQuestions.open ? state.addQuestions.open : false
  );
  const [showDeleteQuestion, modifyShowDeleteQuestion] = useState(
    state.deleteQuestions.open ? state.deleteQuestions.open : false
  );
  const [option, setOption] = useState("None");
  const [disabledButton, setDisableButton] = useState(false);

  const style = makeStyles((theme) => ({
    select: {
      margin: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(2),
    },
    paper: {
      margin: theme.spacing(2),
      overflow: "hidden",
    },
  }));

  const classes = style();
  useEffect(() => {
    dispatch({ type: "CLOSE_ADD_QUESTION" });
    dispatch({ type: "CLOSE_DELETE_QUESTION" });
    if (option === "None") {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [option]);

  function handleChange(e) {
    setOption(e.target.value);
  }

  function openAddQuestion() {
    dispatch({
      type: "OPEN_ADD_QUESTION",
      payload: {
        course: option,
      },
    });
  }

  function openDeleteQuestion() {
    dispatch({
      type: "OPEN_DELETE_QUESTION",
      payload: {
        course: option,
      },
    });
  }

  useEffect(() => {
    modifyShowAddQuestion(state.addQuestions.open);
  }, [state.addQuestions.open]);

  useEffect(() => {
    modifyShowDeleteQuestion(state.deleteQuestions.open);
  }, [state.deleteQuestions.open]);

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={8}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} sm={6}>
                <h3>Select a course</h3>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Select
                  className={classes.select}
                  label="Select a course"
                  value={option}
                  onChange={handleChange}
                >
                  <MenuItem value="None">None</MenuItem>
                  {state.user.courses.map((course, i) => (
                    <MenuItem key={i} value={course.name}>
                      {course.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} sm={6}>
                <Button
                  className={classes.button}
                  color="secondary"
                  variant="contained"
                  disabled={disabledButton}
                  onClick={openAddQuestion}
                >
                  Add Question
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  disabled={disabledButton}
                  onClick={openDeleteQuestion}
                >
                  Delete Question
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item item xs={12} sm={8} md={8}>
          {showAddQuestion ? (
            <Paper className={classes.paper}>
              <AddQuestion />
            </Paper>
          ) : null}
          {showDeleteQuestion ? (
            <Paper className={classes.paper}>
              <DeleteQuestion />
            </Paper>
          ) : null}
        </Grid>
      </Grid>
    </div>
  );
}
