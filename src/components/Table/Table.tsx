import React, {FC} from "react";
import {tableInfo} from "../../models/tableInfo";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

interface IProps {
    data: tableInfo[]
    type: string
}

const Table:FC<IProps> = ({data, type}) => {

    const tableHeads = Object.keys(data[0]);

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed w-full">
                                <TableHead data={tableHeads} />
                                <tbody className="divide-y divide-gray-200">
                                {data.map((item: tableInfo) => {
                                    return  <TableBody data={item} type={type} />
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Table;