import { Col, Container, Row } from "reactstrap";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

function DateFilter({
  country,
  isLoading,
  onChange,
  selectedDate,
  minDate,
  maxDate,
  isWorld,
}) {
  if (isWorld) {
    return <div></div>;
  }
  if (isLoading) {
    return <div className="mt-3">Loading...</div>;
  }
  return (
    <Container className="mt-3" fluid>
      Total kasus covid-19 di {country} antara tanggal:
      <Row className="justify-content-center mt-3">
        <Col sm={5}>
          <DateRangePicker
            locale="id"
            onChange={onChange}
            value={selectedDate}
            minDate={minDate}
            maxDate={maxDate}
            clearIcon={null}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DateFilter;
