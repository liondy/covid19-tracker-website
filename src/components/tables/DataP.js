import React from "react";
import { Table } from "reactstrap";

function Data({ data, status }) {
  const renderTableData = () => {
    if (!status) {
      return data.map((provinsi, index) => {
        const { Kasus_Meni, Kasus_Posi, Kasus_Semb, Provinsi } = provinsi;
        var jml = Kasus_Semb + Kasus_Posi + Kasus_Meni;
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Provinsi}</td>
            <td>{jml}</td>
            <td>{Kasus_Posi}</td>
            <td>{Kasus_Semb}</td>
            <td>{Kasus_Meni}</td>
          </tr>
        );
      });
    }
  };
  return (
    <Table hover responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>Provinsi</th>
          <th>Jumlah Kasus</th>
          <th>Positif</th>
          <th>Sembuh</th>
          <th>Meninggal</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </Table>
  );
}
export default Data;
