import { Col, Container, Row } from "reactstrap";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

function DateFilter({ changeDate, selectedDate, minDate, maxDate }) {
  return (
    <Container className="mt-3" fluid>
      Filter Tanggal
      <Row className="justify-content-center mt-3">
        <Col sm={5}>
          <DateRangePicker
            locale="id"
            onChange={changeDate}
            value={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DateFilter;
