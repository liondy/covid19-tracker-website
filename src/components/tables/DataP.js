import React, { useState } from "react";
import { Table } from "reactstrap";
import { getProvinces, getProvinceHospital, getZonaIndonesia } from "../../api/Api";


function Data({ }) {

    const fetchedDataProvince = getProvinces();


    const renderTableData = async () => {
        const fetchedDataProvince = await getProvinces();
        var i = 1;
        var temp = fetchedDataProvince[1];
        for (let prov in fetchedDataProvince) {
            temp = fetchedDataProvince[prov];
            var datasource = [];
            datasource.push({
                Provinsi: temp.Provinsi,
                Positif: temp.Kasus_Posi,
                Sembuh: temp.Kasus_Semb,
                Meninggal: temp.Kasus_Meni
            });
            console.log(datasource[0]["Provinsi"]);

            return (
                <tr >
                    <td>{datasource[0]['Provinsi']}</td>
                    <td>
                        {((datasource[0]['Positif'] + datasource[0]['Sembuh'] + datasource[0]['Meninggal']).toString().replace(/\B(?=(\d{3})+(?!\d))/g), ".")}
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