import React from "react";
import { Table } from "reactstrap";


function Data({ data }) {
    const renderTableData = () => {
        return data.map((index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{attribut.Provinsi}</td>
                    <td>
                        {((attribut.Kasus_Meni + attribut.Kasus_Posi + attribut.Kasus_Sem).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
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