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
		default:
			return state;
	}
};

export const initialState = {
	user: {
		name: '',
		email: '',
		role: ''
	},
	theme: {
		type: 'dark'
	},
	toastr: {
		message: 'Welcome to code online',
		severity: 'success'
	}
};
