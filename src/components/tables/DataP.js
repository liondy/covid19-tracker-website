import React, { useState } from "react";
import { Table } from "reactstrap";
import { getProvinces, getProvinceHospital, getZonaIndonesia } from "../../api/Api";


function Data({ }) {

    const fetchedDataProvince = getProvinces();
    console.log("cek");

    const renderTableData = () => {
        var i = 1;
        console.log(fetchedDataProvince);
        for (let prov in fetchedDataProvince) {
            return (
                <tr >
                    <td>{i++}</td>
                    <td>{fetchedDataProvince[prov].Provinsi}</td>
                    <td>
                        {((fetchedDataProvince[prov].Kasus_Meni + fetchedDataProvince[prov].Kasus_Posi + fetchedDataProvince[prov].Kasus_Sem).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
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