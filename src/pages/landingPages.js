import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Desain from "../assets/Jumbotron.png";
import "../landingPages.css";
import { Products } from "../datadummy/dataProduct";
import { Container, Col, Row, Card, Navbar, Nav } from "react-bootstrap";
import AuthModal from "../components/AuthModal";
import { useNavigate, Link } from "react-router-dom";

function LandingPages() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [dataProduct] = useState(Products);
  console.log(dataProduct);
  const navigate = useNavigate();

  const movetoDetail = (id) => {
    navigate("/product/" + id);
  };

  return (
    <div>
      <div>
        <Container className="">
          <Navbar className="mt-5 d-flex justify-content-between ">
            <Nav className="">
              <img style={{ width: "70px" }} src={Logo} alt="" />
            </Nav>
            <Nav className="">
              <div>
                <div>
                  <AuthModal />
                </div>
              </div>
            </Nav>
          </Navbar>
        </Container>
      </div>
      <div>
        <Container>
          <div className="m-5">
            <img
              style={{ borderRadius: "10px", width: "100%" }}
              src={Desain}
              alt=""
            />
          </div>
          <div className="m-5">
            <div style={{ color: "red" }}>
              <h1 className="">Let's order</h1>
            </div>
            <div className="d-flex mt-3 justify-content-center">
              {dataProduct.map((item, index) => (
                <Card
                  key={index}
                  className="me-3"
                  style={{
                    width: "18rem",
                    backgroundColor: "rgb(190,190,190)",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item?.image}
                    style={{ cursor: "pointer" }}
                    onClick={() => movetoDetail(item?.id)}
                  />

                  <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>{item?.price}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default LandingPages;
