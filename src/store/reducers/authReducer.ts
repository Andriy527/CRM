import {authActions, authActionsType, Iauth} from "../actions/authActions";

const authState: Iauth = {
    isAuth: false,
    userInfo: null
}

export const authReducer = (state= authState, action:authActionsType):Iauth => {
    switch (action.type) {
        case authActions.AUTH_ACTION:
            return {...state, isAuth: action.payload.isAuth, userInfo: action.payload.userInfo}
        case authActions.LOGOUT_ACTION:
            return {...state, isAuth: action.payload.isAuth, userInfo: action.payload.userInfo}
        default:
            return state
    }
}

export const logoutAction = (payload: Iauth) => ({type: authActions.LOGOUT_ACTION, payload: payload});
export const authAction = (payload: any) => ({type:authActions.AUTH_ACTION, payload: payload});
