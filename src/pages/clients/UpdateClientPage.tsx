import React, {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import {getUsers} from "../../store/asyncActions/getUsers";
import {IaddClient} from "../../models/addClient";
import $axios from "../../http";
import {useNavigate, useParams} from "react-router-dom";

const UpdateClientPage: FC = () => {

    const dispatch = useDispatch();
    const users = useTypedSelector(state => state.users.users);
    const navigate = useNavigate();
    const {id} = useParams();

    const [clientData, setClientData] = useState<IaddClient>({
        address: '',
        city: '',
        company_name: '',
        company_type: '',
        email: '',
        industry_id: 1,
        name: '',
        primary_number: '',
        secondary_number: '',
        user_id: 0,
        vat: '',
        zipcode: ''
    });

    const getClient = async () => {
        const result = await $axios.get(`/index/${id}`);
        const data = result.data.data;
        setClientData(data);
        }

    useEffect(() => {
        dispatch(getUsers() as any);
        getClient();
    }, [])

    const updateClient = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await $axios.put(`/index/${id}`,[clientData]);
        navigate('/');

    }

    return (
        <MainLayout>
            <h1 className={"pb-3"}>Update Client:</h1>

            <form onSubmit={(e) => updateClient(e)}>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-3">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, name: e.target.value})}
                               defaultValue={clientData.name}
                               placeholder="Enter your name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, email: e.target.value})}
                               defaultValue={clientData.email}
                               placeholder="Enter your mail" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primary Phone</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, primary_number: e.target.value})}
                               defaultValue={clientData.primary_number}
                               placeholder="Enter your primary phone" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secondary Phone</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, secondary_number: e.target.value})}
                               defaultValue={clientData.secondary_number}
                               placeholder="Enter your secondary phone" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, address: e.target.value})}
                               defaultValue={clientData.address}
                               placeholder="Enter your adress" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zipcode</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, zipcode: e.target.value})}
                               defaultValue={clientData.zipcode}
                               placeholder="Enter your Zipcode" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, city: e.target.value})}
                               defaultValue={clientData.city}
                               placeholder="" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company name</label>
                        <input type="Enter your company name"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, company_name: e.target.value})}
                               defaultValue={clientData.company_name}
                               placeholder="" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vat</label>
                        <input type="text"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               onChange={(e) => setClientData({...clientData, vat: e.target.value})}
                               defaultValue={clientData.vat}
                               placeholder="Enter your Vat" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                        <input type="text" id="visitors"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               defaultValue={clientData.industry_id}
                               placeholder="Enter your industry" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company type</label>
                        <input type="text" id="visitors"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               defaultValue={clientData.company_type}
                               onChange={(e) => setClientData({...clientData, company_type: e.target.value})}
                               placeholder="Enter your company type" required />
                    </div>
                    <div>
                        <label htmlFor="visitors"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Check user</label>
                        <select onChange={(e) => setClientData({...clientData, user_id: +e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {users?.map((user, index) => {
                                return <option selected={clientData.user_id === user.id ? true : false} value={user.id} key={user.id + index}>{user.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update client
                </button>
            </form>
        </MainLayout>
    )
}
export default UpdateClientPage;