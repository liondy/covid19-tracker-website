import React from "react";
import { Table } from "reactstrap";

function Data({ data, status }) {
  const renderTableData = () => {
    if (status === "confirmed") {
      return data.map((negara, index) => {
        const { Country, TotalConfirmed } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>{TotalConfirmed}</td>
          </tr>
        );
      });
    } else if (status === "recovered") {
      return data.map((negara, index) => {
        const { Country, TotalRecovered } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>{TotalRecovered}</td>
          </tr>
        );
      });
    } else if (status === "deaths") {
      return data.map((negara, index) => {
        const { Country, TotalDeaths } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>{TotalDeaths}</td>
          </tr>
        );
      });
    }
  };
  return (
    <Table hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Negara</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </Table>
  );
}

export default Data;
