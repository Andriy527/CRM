import React, {FC, FormEvent, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import $axios from "../../http";
import {useNavigate, useParams} from "react-router-dom";
import {IaddUser} from "../../models/addUser";
import {IaddClient} from "../../models/addClient";
import {getUsers} from "../../store/asyncActions/getUsers";

const UpdateUserPage: FC = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [userData, setUserData] = useState<IaddUser>({
        address: null,
        email: '',
        image_path: null,
        name: '',
        password: '',
        personal_number: null,
        work_number: null
    });

    const getUser = async () => {
        const result = await $axios.get(`/users/${id}`);
        const data = result.data.data;
        setUserData(data);
    }

    const updateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await $axios.put(`/users/${id}`, [userData]);
        navigate('/users');
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <MainLayout>
            <h1 className={"pb-3"}>Create new Lead:</h1>

            <form onSubmit={(e) => updateUser(e)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, name: e.target.value})}
                               defaultValue={userData.name}
                               placeholder="Enter lead title" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, email: e.target.value})}
                               defaultValue={userData.email}
                               placeholder="Enter lead description" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, password: e.target.value})}
                               defaultValue={userData.password}
                               placeholder="Enter lead description" required />
                    </div>

                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create user
                </button>
            </form>
        </MainLayout>
    )
}
export default UpdateUserPage;