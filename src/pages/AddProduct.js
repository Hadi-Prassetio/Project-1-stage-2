import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "../assets/FotoDetail.png";
import NavbarAdmin from "../components/navbaradmin";

function AddProduct() {
  return (
    <div>
      <div>
        <NavbarAdmin />
      </div>
      <div>
        <Container className="mt-5 mb-5">
          <Row>
            <Col md={7} className="">
              <h1 className="mb-5" style={{ color: "brown" }}>
                Product
              </h1>
              <form action="">
                <Col>
                  <input
                    className="mb-5 pt-2 pb-2 ps-1"
                    type="text"
                    placeholder="Name Product"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      borderColor: "red",
                    }}
                  />
                </Col>
                <Col>
                  <input
                    className="mb-5 pt-2 pb-2 ps-1"
                    type="text"
                    placeholder="Price"
                    style={{
                      width: "100%",
                      borderRadius: "5px",
                      borderColor: "red",
                    }}
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
                <button
                  className="mb-5"
                  style={{
                    width: "90%",
                    borderRadius: "5px",
                    backgroundColor: "red",
                    color: "white",
                    borderColor: "red",
                  }}
                >
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
export default AddProduct;
