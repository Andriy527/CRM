import React, {FC, useCallback, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import $axios from "../../http";
import Iclients from "../../models/clientsInfo";
import Table from "../../components/Table/Table";
import {Itasks} from "../../models/tasksInfo";

const TasksPage: FC = () => {

    const [tasks, setTasks] = useState<Itasks[]>([]);
    let loadingInfo = 'Loading...';

    const fetchTasks = useCallback(async() => {
        try {
            const result = await $axios.get('/tasks');
            setTasks(result.data.data);

            if(!tasks.length) {
                loadingInfo = 'There are no clients';
            }
        } catch (error:any) {
            loadingInfo = error.message;
        }

    }, [])

    useEffect( () => {
        fetchTasks();
    }, [])
    return (
        <>
            <MainLayout>
                {tasks.length
                    ? <Table data={tasks} type={"tasks"}/>
                    : <h3 className={"text-center"}>{loadingInfo}</h3>
                }
            </MainLayout>
        </>
    )
}
export default TasksPage;