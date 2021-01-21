import React from "react";
import { Table } from "reactstrap";


function Data({ data }) {
    const renderTableData = () => {
        return data.map((index) => {
            const { Provinsi, Kasus_Meni, Kasus_Posi, Kasus_Sem } = index;
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{Provinsi}</td>
                    <td>
                        {((Kasus_Meni + Kasus_Posi + Kasus_Sem).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
                    </td>
                </tr>
            );
        });
    }
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Negara</th>
                    <th>Total Konfirmasi</th>
                </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
        </Table>
    );
}
export default Data;