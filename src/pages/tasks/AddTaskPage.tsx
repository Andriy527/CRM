import React, {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getUsers} from "../../store/asyncActions/getUsers";
import $axios from "../../http";
import MainLayout from "../../layouts/MainLayout";
import {IaddTasks} from "../../models/addTask";

// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTaskPage: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useTypedSelector(state => state.users.users);
    const userId = useTypedSelector(state => state.auth.userInfo?.id)
    const [startDate, setStartDate] = useState(new Date());
    const [taskData, setTaskData] = useState<IaddTasks>({
        client_id: 0,
        deadline: startDate.toString(),
        description: '',
        sprint_assigned_id: 1,
        status: 1,
        title: '',
        user_assigned_id: 0,
        user_created_id: userId ? userId : 1
    });

    useEffect(() => {
        dispatch(getUsers() as any);
    }, [])

    const addLead = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await $axios.post('/tasks',[taskData]);
        navigate('/tasks');
    }

    return (
        <MainLayout>
            <h1 className={"pb-3"}>Create new Task:</h1>

            <form onSubmit={(e) => addLead(e)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setTaskData({...taskData, title: e.target.value})}
                               placeholder="Enter lead title" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setTaskData({...taskData, description: e.target.value})}
                               placeholder="Enter lead description" required />
                    </div>
                    <div>
                        <label htmlFor="visitors"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        <select onChange={(e) => setTaskData({...taskData, status: +e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value={0}>In progress</option>
                            <option value={1}>Done</option>
                            <option value={2}>Not done</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="visitors"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check user</label>
                        <select onChange={(e) => setTaskData({...taskData, user_assigned_id: +e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {users?.map((user, index) => {
                                return <option value={user.id} key={user.id + index}>{user.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="visitors"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check client</label>
                        <select onChange={(e) => setTaskData({...taskData, client_id: +e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {users?.map((user, index) => {
                                return <option value={user.id} key={user.id + index}>{user.name}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="visitors"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deadline</label>
                        <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create user
                </button>
            </form>
        </MainLayout>
    )
}
export default AddTaskPage;