import React from "react";
import { Table } from "reactstrap";

function Data({ data, status }) {
    const renderTableData = () => {
    	if(status){
    		console.log("data");
    		console.log(data);
	        return data.map((provinsi, index) => {
	            const {
	                address,
	                name,
	                phone,
	                region,
	            } = provinsi;
	            return (
	                <tr key={index}>
	                    <td>{index + 1}</td>
	                    <td>{name}</td>
	                    <td>{address}</td>
	                    <td>{phone}</td>
	                    <td>{region}</td>
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
                    <th>Nama RS</th>
                    <th>Alamat</th>
                    <th>No. telp</th>
                    <th>Kota/Kabupaten</th>
                </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
        </Table>
    );
}
export default Data;