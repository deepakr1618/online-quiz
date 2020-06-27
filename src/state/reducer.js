export const reducer = function (state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: {
          ...state.theme,
          type: state.theme.type === "light" ? "dark" : "light",
        },
      };
    case "ADD_TOASTR":
      return {
        ...state,
        toastr: action.payload,
      };
    case "REMOVE_TOASTR":
      return {
        ...state,
        toastr: {},
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "OPEN_ADD_QUESTION":
      return {
        ...state,
        deleteQuestions: {
          ...state.deleteQuestions,
          open: false,
        },
        addQuestions: {
          ...state.addQuestions,
          course: action.payload.course,
          open: true,
        },
      };
    case "OPEN_DELETE_QUESTION":
      return {
        ...state,
        addQuestions: {
          ...state.addQuestions,
          open: false,
        },
        deleteQuestions: {
          ...state.deleteQuestions,
          course: action.payload.course,
          open: true,
        },
      };

    case "CLOSE_DELETE_QUESTION":
      return {
        ...state,
        deleteQuestions: {
          ...state.deleteQuestions,
          open: false,
        },
      };
    case "CLOSE_ADD_QUESTION":
      return {
        ...state,
        addQuestions: {
          ...state.addQuestions,
          open: false,
        },
      };
    case "ADD_QUESTION":
      return {
        ...state,
        questions: [
          ...state.questions,
          {
            question: action.payload.question,
            course: state.addQuestions.course,
            faculyName: state.user.name,
            id: parseInt(Math.random() * 1000),
          },
        ],
      };
    case "SELECT_QUESTION_TO_DELETE":
      return {
        ...state,
        deleteQuestions: {
          ...state.deleteQuestions,
          selected: [
            ...state.deleteQuestions.selected,
            action.payload.questionid,
          ],
        },
      };
    case "DESELECT_QUESTION_TO_DELETE":
      return {
        ...state,
        deleteQuestions: {
          ...state.deleteQuestions,
          selected: state.deleteQuestions.selected.filter(
            (qid) => qid !== action.payload.questionid
          ),
        },
      };
    case "CLOSE_DELETE_QUESTION":
      return {
        ...state,
        deleteQuestions: {
          ...state.addQuestions,
          open: true,
        },
      };
    case "DELETE_QUESTION":
      // Remove questions with the id = id in selected questions for deletion
      return {
        ...state,
        deleteQuestions: {
          ...state.deleteQuestions,
          selected: [],
        },
        questions: state.questions.filter(
          ({ id }) => !state.deleteQuestions.selected.includes(id)
        ),
      };
    default:
      return state;
  }
};

export const initialState = {
  user: {
    name: "Deepak",
    email: "abc",
    role: "TEACHER",
    section: "",
    courses: [
      {
        name: "Data Structure",
        code: "CS41",
      },
      {
        name: "Machine Learning",
        code: "CS54",
      },
    ],
  },
  theme: {
    type: "dark",
  },
  toastr: {
    message: "Welcome to code online",
    severity: "success",
  },
  addQuestions: {
    open: false,
    course: "",
  },
  deleteQuestions: {
    open: false,
    course: "",
    selected: [],
  },
  questions: [],
};
