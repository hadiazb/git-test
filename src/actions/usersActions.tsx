import axios from 'axios';
import {
	GET_USERS,
	LOADING,
	ERROR,
	DELETE_USERS,
} from '../TypesStates/usersTypes';

export const getUsers = (page: number) => async (dispatch: any) => {
	dispatch({
		type: LOADING,
	});
	try {
		const respuesta = await axios.get(
			`https://reqres.in/api/users?page=${page}`
		);
		dispatch({
			type: GET_USERS,
			payload: respuesta.data.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: 'The User is undefined',
		});
	}
};

export const deleteUsersList = () => async (dispatch: any) => {
	dispatch({
		type: DELETE_USERS,
		payload: [],
	});
};
