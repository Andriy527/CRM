import React, {FC, useCallback, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import $axios from "../../http";
import Table from "../../components/Table/Table";
import Iclients from "../../models/clientsInfo";

const ClientPage:FC = () => {

    const [clients, setClients] = useState<Iclients[]>([]);
    let loadingInfo = 'Loading...';

    const fetchClients = useCallback(async() => {
        try {
            const result = await $axios.get('/index');
            setClients(result.data.data);

            if(!clients.length) {
                loadingInfo = 'There are no clients';
            }
        } catch (error:any) {
            loadingInfo = error.message;
        }

    }, [])

    useEffect( () => {
         fetchClients();
        }, [])
    return (
        <>
            <MainLayout>
                {clients.length
                ? <Table data={clients} type={"index"}/>
                : <h3 className={"text-center"}>{loadingInfo}</h3>
                }
            </MainLayout>
        </>
    )
}

export default ClientPage;