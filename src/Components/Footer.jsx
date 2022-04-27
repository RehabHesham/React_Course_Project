import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer has-cards">
        <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-primary font-weight-light mb-2">
                Thank you for supporting us!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="  rounded-circle"
                color="twitter"
                href="#nav"
                id="tooltip475038074"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-twitter" />
                </span>
              </Button>
              <Button
                className="  rounded-circle ml-1"
                color="facebook"
                href="#nav"
                id="tooltip837440414"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-facebook-square" />
                </span>
              </Button>
              <Button
                className="  rounded-circle ml-1"
                color="dribbble"
                href="#nav"
                id="tooltip829810202"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-dribbble" />
                </span>
              </Button>
              <Button
                className="  rounded-circle ml-1"
                color="github"
                href="#nav"
                id="tooltip495507257"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="align-items-center justify-content-md-between">
            <Col md="6">
              <div className="copyright">
                © {new Date().getFullYear()} <a href="#nav">Other work</a>.
              </div>
            </Col>
            <Col md="6">
              <Nav className="nav-footer justify-content-end">
                <NavItem>
                  <Link
                    className="text-decoration-none text-gray mr-2"
                    to={`/home`}
                  >
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="text-decoration-none text-gray ml-2"
                    to={`/login#nav`}
                  >
                    Login
                  </Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
