import {userActions, IusersAction, Iusers} from "../actions/usersActions";

const usersState: Iusers = {
    users: []
}

export const usersReducer = (state= usersState, action:IusersAction):Iusers => {
    switch (action.type) {
        case userActions.GET_USERS_ACTION:
            return {...state, users: action.payload.users}
        default:
            return state
    }
}

export const getUsersAction = (payload: Iusers) => ({type: userActions.GET_USERS_ACTION, payload: payload})
