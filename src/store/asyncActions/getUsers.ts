import {getUsersAction} from "../reducers/usersReducer";
import $axios from "../../http";
import {ThunkDispatch} from "redux-thunk";

export const getUsers = () => {
    return async (dispatch: ThunkDispatch<any, any, any>) => {
        try {
            const result = await $axios.get('/users')
            const usersName = result.data.data.map((user: any) => {return {name: user.name, id: user.id}});
            dispatch(getUsersAction({users: usersName}))

        } catch (e) {
            throw new Error('something went wrong');
        }
    }
}