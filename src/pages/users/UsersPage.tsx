import React, {FC, useCallback, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import $axios from "../../http";
import Iusers from "../../models/usersInfo";
import Table from "../../components/Table/Table";

const UsersPage: FC = () => {

    const [users, setUsers] = useState<Iusers[]>([]);
    let loadingInfo: string = 'Loading...';

    const fetchUsers = useCallback(async() => {
        try {
            const result = await $axios.get('/users');
            setUsers(result.data.data);

            if(!users.length) {
                loadingInfo = 'there are no users';
            }
        } catch (e) {
            console.log(e);
        }

    }, [])

    useEffect( () => {
        fetchUsers();
    }, [])
    return (
        <MainLayout>
            {users.length
                ? <Table data={users} type={"users"}/>
                : <h3 className={"text-center"}> {loadingInfo}</h3>
            }

        </MainLayout>
    )
}
export default UsersPage;