import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import FilterComponent from "./filters/FilterComponent";

const ZoneTable = ({ isLoading, data }) => {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.kota && item.kota.toLowerCase().includes(filterText.toLowerCase())
  );
  const subHeaderComponenetMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
  const columns = [
    {
      name: <h4>Kabupaten / Kota</h4>,
      selector: "kota",
      sortable: true,
    },
    {
      name: <h4>Status</h4>,
      selector: "status",
      sortable: true,
    },
  ];
  const conditionalRowStyles = [
    {
      when: (row) => row.status === "RESIKO TINGGI",
      style: {
        color: "white",
        backgroundColor: "rgba(242, 38, 19, 0.9)",
      },
    },
    {
      when: (row) => row.status === "RESIKO SEDANG",
      style: {
        color: "white",
        backgroundColor: "#ff4b0d",
      },
    },
    {
      when: (row) => row.status === "RESIKO RENDAH",
      style: {
        color: "white",
        backgroundColor: "rgba(248, 148, 6, 0.9)",
      },
    },
    {
      when: (row) => row.status === "TIDAK ADA KASUS",
      style: {
        color: "white",
        backgroundColor: "rgba(63, 195, 128, 0.9)",
      },
    },
  ];
  if (isLoading) {
    return <div className="mt-3 text-center mb-3">Loading...</div>;
  }
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10} sm={12}>
          <DataTable
            title={<h2>Tabel Zona Resiko di Indonesia</h2>}
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle}
            paginationComponentOptions={{
              rowsPerPageText: "Jumlah Baris",
            }}
            subHeader
            subHeaderComponent={subHeaderComponenetMemo}
            conditionalRowStyles={conditionalRowStyles}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ZoneTable;
