import React, {FC, useCallback, useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import $axios from "../../http";
import Table from "../../components/Table/Table";
import {ILeads} from "../../models/leadsInfo";

const LeadsPage: FC = () => {

    const [leads, setLeads] = useState<ILeads[]>([]);

    let loadingInfo: string = 'Loading...';

    const fetchLeads = useCallback(async() => {
        try {
            const result = await $axios.get('/leads');
            setLeads(result.data.data);

            if(!leads.length) {
                loadingInfo = 'There are no leads';
            }
        } catch (e) {
            console.log(e);
        }

    }, [])

    useEffect( () => {
        fetchLeads();
    }, [])
    return (
        <MainLayout>
            {leads.length
                ? <Table data={leads} type={"leads"}/>
                : <h3 className={"text-center"}> {loadingInfo}</h3>
            }

        </MainLayout>
    )
}
export default LeadsPage;