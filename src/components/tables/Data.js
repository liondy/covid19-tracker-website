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
        const {
          Country,
          TotalConfirmed,
          TotalRecovered,
          RecoveredPercentage,
        } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>{TotalConfirmed}</td>
            <td> {TotalRecovered} </td>
            <td> {RecoveredPercentage.toFixed(2)}% </td>
          </tr>
        );
      });
    } else if (status === "deaths") {
      return data.map((negara, index) => {
        const {
          Country,
          TotalConfirmed,
          TotalDeaths,
          DeathPercentage,
        } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>{TotalConfirmed}</td>
            <td>{TotalDeaths}</td>
            <td> {DeathPercentage.toFixed(2)}% </td>
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
          <th>Total Konfirmasi</th>
          {status === "recovered" ? (
            <>
              <th>Total Sembuh</th>
              <th>% dari Total Sembuh</th>
            </>
          ) : (
            <></>
          )}
          {status === "deaths" ? (
            <>
              <th>Total Meninggal</th>
              <th>% dari Total Meninggal</th>
            </>
          ) : (
            <></>
          )}
        </tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </Table>
  );
}

export default Data;
