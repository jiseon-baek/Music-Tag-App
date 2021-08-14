import { AUTH, LOGOUT } from '../constants/actionTypes';


const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		//Set for the Auth
		case AUTH:
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
			return { ...state, authData: action?.data };
		case LOGOUT:
			localStorage.clear();
			return { ...state, authData: null };
		default:
			return state;
	}
}

export default authReducer;