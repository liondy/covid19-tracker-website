import "./Menu.css";
import { Link, withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function Menu() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs="12" md="4">
          <Link to="country" style={{ textDecoration: "none" }}>
            <a className="HomeMenu" rel="noopener noreferrer">
              Lihat Status Negara
            </a>
          </Link>
        </Col>
        <Col xs="12" md="4">
          <Link to="province" style={{ textDecoration: "none" }}>
            <a className="HomeMenu" rel="noopener noreferrer">
              Lihat Status Provinsi
            </a>
          </Link>
        </Col>
        <Col xs="12" md="4">
          <Link to="about" style={{ textDecoration: "none" }}>
            <a className="HomeMenu" rel="noopener noreferrer">
              Tentang Kami
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Menu);
