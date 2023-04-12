
export enum userActions  {
    GET_USERS_ACTION = 'GET_USERS_ACTION'
}

interface IusersItem {
    name: string
    id: number
}

export interface Iusers {
    users: IusersItem[]
}

export interface IusersAction {
    type: userActions.GET_USERS_ACTION
    payload: any
}