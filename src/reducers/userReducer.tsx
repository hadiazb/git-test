import {
	GET_USERS,
	ERROR,
	LOADING,
	DELETE_USERS,
} from '../TypesStates/usersTypes';

interface Action {
	type: string;
	payload: any;
}

const INITIAL_STATE = {
	users: [],
	newPage: 1,
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case GET_USERS:
			return {
				...state,
				users: [].concat(state.users, action.payload),
				newPage: state.newPage + 1,
				// users: state.users
				// 	.concat(action.payload)
				// 	.filter((i: any) => i.id !== action.payload.id),
				loading: false,
				error: '',
			};
		case DELETE_USERS:
			return {
				...state,
				users: [].concat(state.users, action.payload),
				newPage: 1,
				loading: false,
				error: '',
			};
		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
