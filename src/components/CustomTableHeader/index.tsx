import React, {FC} from 'react'
import "./index.sass"


const CustomHeaderTable: FC<CustomHeaderTable> = ({headers}) =>{
    return(
        <>
            <tr className='tr_custom_table'>
                {headers.map((header, key) => (
                    <React.Fragment key={key}>{header} </React.Fragment>
                ))}
            </tr>
        </>
    );
};



interface CustomHeaderTable {
    headers: JSX.Element[]
}


export default CustomHeaderTable;