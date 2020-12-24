import "./Menu.css";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function Menu() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="12" md="4" className="mb-3">
          <Link to="country" className="HomeMenu">
            Lihat Status Negara
          </Link>
        </Col>
        <Col xs="12" md="4" className="mb-3">
          <Link to="province" className="HomeMenu">
            Lihat Status Provinsi
          </Link>
        </Col>
        <Col xs="12" md="4" className="mb-3">
          <Link to="about" className="HomeMenu">
            Tentang Kami
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Menu);
