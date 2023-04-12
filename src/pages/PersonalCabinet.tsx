import React, {FC, FormEvent, useEffect, useState} from 'react';
import MainLayout from "../layouts/MainLayout";
import {useNavigate, useParams} from "react-router-dom";
import {IaddUser} from "../models/addUser";
import $axios from "../http";
import {useTypedSelector} from "../hooks/useTypedSelector";

const PersonalCabinet:FC = () => {

    const navigate = useNavigate();
    const userId = useTypedSelector(state => state.auth.userInfo?.id);

    const [userData, setUserData] = useState<IaddUser>({
        address: '',
        email: '',
        image_path: null,
        name: '',
        password: '',
        personal_number: '',
        work_number: ''
    });

    const getUser = async () => {
        const result = await $axios.get(`/users/${userId}`);
        console.log(result);
        const data = result.data.data;
        setUserData(data);
    }

    const updateUser = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await $axios.put(`/users/${userId}`, [userData]);
        navigate('/users');
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <MainLayout>
            <h1 className={"pb-3"}>Personal cabinet:</h1>

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
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, address: e.target.value})}
                               defaultValue={userData.address?.toString()}
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
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, password: e.target.value})}
                               defaultValue={userData.password}
                               placeholder="Enter lead description" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personal number</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, personal_number: e.target.value})}
                               defaultValue={userData.personal_number !== null ? userData.personal_number : ''}
                               placeholder="Enter lead description" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work number</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setUserData({...userData, work_number: e.target.value})}
                               defaultValue={userData.work_number !== null ? userData.work_number : ''}
                               placeholder="Enter lead description" required />
                    </div>
                    <div>
                     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                           htmlFor="file_input">Upload image</label>
                     <input onChange={(e) => setUserData({...userData, image_path: e.target.value})} defaultValue={userData.image_path !== null ? userData.image_path : ''} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    </div>
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create user
                </button>
            </form>
        </MainLayout>
    )
}
export default PersonalCabinet;