import React, {FC} from "react";
import {tableInfo} from "../../models/tableInfo";

interface IProps {
    data: any[]
}

const TableHead:FC<IProps> = ({data}) => {

    return (
        <>
            <thead className="bg-gray-50">
            <tr>
                {data.map(item => {
                    return  <th scope="col" className="px-2 break-words py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                        {item}
                    </th>
                })}
            </tr>
            </thead>
        </>
    )
}
export default TableHead;