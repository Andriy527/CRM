import IuserInfo from "../../models/userInfo";

export enum authActions {
    AUTH_ACTION = 'ACTION_AUTH',
    LOGOUT_ACTION = 'ACTION_LOGOUT'
}


export interface IauthAction {
    type: authActions.AUTH_ACTION
    payload: any
}

export interface IlogoutAction {
    type: authActions.LOGOUT_ACTION
    payload: any
}

export type authActionsType = IauthAction | IlogoutAction;

export interface Iauth {
    isAuth: boolean
    userInfo: IuserInfo | null
}