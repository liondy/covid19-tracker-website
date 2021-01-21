import React from "react";
import { Table } from "reactstrap";

function Data({ data, status }) {
    const renderTableData = () => {
    	if(status){
    		console.log(data);
	        return data.map((provinsi, index) => {
	            const {
	                Kasus_Meni,
	                Kasus_Posi,
	                Kasus_Semb,
	                Provinsi,
	            } = provinsi;
	            return (
	                <tr key={index}>
	                    <td>{index + 1}</td>
	                    <td>{Provinsi}</td>
	                    <td>
	                        {((Kasus_Meni + Kasus_Posi + Kasus_Semb).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
	                    </td>
	                </tr>
	            );
	        });
		}
    }
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Provinsi</th>
                    <th>Total Konfirmasi</th>
                </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
        </Table>
    );
}
export default Data;