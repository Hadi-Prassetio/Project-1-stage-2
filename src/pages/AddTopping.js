import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "../assets/ToppingDetail.png";
import NavbarAdmin from "../components/navbaradmin";

export default function AddTopping() {
  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>
      <div>
        <Container className="mt-5 mb-5">
          <Row>
            <Col md={7} className="">
              <h1 className="mb-5">Product</h1>
              <form action="">
                <Col>
                  <input
                    className="mb-5"
                    type="text"
                    placeholder="Name Topping"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <input
                    className="mb-5"
                    type="text"
                    placeholder="Price"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col>
                  <input
                    className="mb-5"
                    type="file"
                    placeholder="Photo Product"
                    style={{ width: "100%" }}
                  />
                </Col>
                <button className="mb-5" style={{ width: "90%" }}>
                  Add Product
                </button>
              </form>
            </Col>
            <Col md={5}>
              <img src={Image} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
