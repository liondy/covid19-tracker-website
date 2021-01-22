import React from "react";
import { Table } from "reactstrap";

function Data({ data, status }) {
  const renderTableData = () => {
    if (status === "confirmed") {
      return data.map((negara, index) => {
        const {
          Country,
          TotalConfirmed,
          Population,
          ConfirmedPercentage,
        } = negara; //destructuring
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{Country}</td>
            <td>
              {TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td>
              {Population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td>{ConfirmedPercentage.toFixed(2).replace(".", ",")}%</td>
            <td>
              {ConfirmedPercentage.toFixed(2).replace(".", ",") > 70
                ? "Ya"
                : "Belum"}
            </td>
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
            <td>
              {TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td>
              {TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td> {RecoveredPercentage.toFixed(2).replace(".", ",")}% </td>
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
            <td>
              {TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td>
              {TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </td>
            <td> {DeathPercentage.toFixed(2).replace(".", ",")}% </td>
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
          <th>Negara</th>
          <th>Total Konfirmasi</th>
          {status === "confirmed" ? (
            <>
              <th>Jumlah Populasi</th>
              <th>% dari Populasi</th>
              <th>Herd Immunity?</th>
            </>
          ) : (
            <></>
          )}
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
