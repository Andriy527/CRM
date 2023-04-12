import React, {FC, useCallback} from "react";
import {tableInfo} from "../../models/tableInfo";
import $axios from "../../http";
import {Link} from "react-router-dom";

interface IProps {
    data: tableInfo
    type: string
}

const TableBody:FC<IProps> = ({data, type}) => {

    const tableValues = Object.values(data);
    const currentType = type === 'index' ? 'clients' : type;

    const removeItem = async (id: number) => {
        try {
            await $axios.delete(`/${type}/${id}`);
        } catch (e) {
            throw new Error('something went wrong');
        }
    }

    return (
        <>
            <tr>
                {tableValues.map(item => {
                    return  <td className="px-2 break-words py-4 text-sm text-gray-800">
                        {item}
                    </td>
                })}
                <td className="px-2 break-words py-4 text-sm text-gray-800">
                    <button onClick={() => removeItem(data.id)} className={"inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase bg-red-800"}>
                        remove item
                    </button>
                    <Link to={`/${currentType}/add/${data.id}`} className={"inline-flex mt-2 items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase bg-blue-500"}>
                        update item
                    </Link>
                </td>
            </tr>
        </>
    )
}
export default TableBody;