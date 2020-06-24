export const reducer = function (state, action) {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: {
					...state.theme,
					type: state.theme.type === 'light' ? 'dark' : 'light'
				}
			};
		case 'ADD_TOASTR':
			return {
				...state,
				toastr: action.payload
			};
		case 'REMOVE_TOASTR':
			return {
				...state,
				toastr: {}
			};
		case 'SET_USER':
			return {
				...state,
				user: action.payload
			};
		case 'OPEN_ADD_QUESTION':
			return {
				...state,
				addQuestions: {
					...state.addQuestions,
					course: action.payload.course,
					open: true
				}
			};
		case 'CLOSE_ADD_QUESTION':
			return {
				...state,
				addQuestions: {
					...state.addQuestions,
					open: false
				}
			};
		case 'ADD_QUESTION':
			return {
				...state,
				questions:[...state.questions, {
					question: action.payload.question,
					course: state.addQuestions.course,
					faculyName: state.user.name
				}]
			}
		default:
			return state;
	}
};

export const initialState = {
	user: {
		name: 'Deepak',
		email: 'abc',
		role: 'TEACHER',
		section: '',
		courses: [
			{
				name: 'Data Structure',
				code: 'CS41'
			},
			{
				name: 'Machine Learning',
				code: 'CS54'
			}
		]
	},
	theme: {
		type: 'dark'
	},
	toastr: {
		message: 'Welcome to code online',
		severity: 'success'
	},
	addQuestions: {
		open: false,
		course:''
	},
	questions: [

	]
};
