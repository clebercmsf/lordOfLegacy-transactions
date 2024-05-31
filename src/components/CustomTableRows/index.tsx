import React, { FC } from "react"


const CustomRowsTable: FC<CustomRowsTable> = ({name,unit,amount}) => {
    return (
        <>
        <tr className="tr_custom_table">
            <td>
                {name}
            </td>
            <td>
                {unit}
            </td>
            <td>
                {amount}
            </td>
        </tr>
        </>
    )
};

interface CustomRowsTable {
    name: string;
    unit: number;
    amount: number[];
}
export default CustomRowsTable;