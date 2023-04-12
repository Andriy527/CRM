import {Dispatch} from "redux";
import {authActions, IauthAction} from "../actions/authActions";
import $axios from "../../http";
import {ThunkDispatch} from "redux-thunk";
import {authAction} from "../reducers/authReducer";

export const Auth = (email: string, password: string) => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        try {
           const result = await $axios.post('/auth', [{email: email, password: password}])
            localStorage.setItem('token', result.data.data.token);
            dispatch(authAction({isAuth: true, userInfo: result.data.data.user}))

        } catch (e) {
            throw new Error('something went wrong');
        }
    }
}