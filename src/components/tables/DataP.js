import React, { useState } from "react";
import { Table } from "reactstrap";
import { getProvinces, getProvinceHospital, getZonaIndonesia } from "../../api/Api";


function Data({ }) {

    const fetchedDataProvince = getProvinces();


    const renderTableData = async () => {
        const fetchedDataProvince = await getProvinces();
        var i = 1;
        var temp = fetchedDataProvince[1];
        console.log(temp);
        for (let prov in fetchedDataProvince) {
            temp = fetchedDataProvince[prov];
            return (
                <tr >
                    <td>{i++}</td>
                    <td>{temp.Provinsi}</td>
                    <td>
                        {((temp.Kasus_Meni + temp.Kasus_Posi + temp.Kasus_Sem).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
                    </td>
                </tr>);
        }
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