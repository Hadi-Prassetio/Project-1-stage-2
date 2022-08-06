import React, { useState } from "react";
import NavbarUser from "../components/navbar";
import { DataProfil } from "../datadummy/dataprofil";
import { Container, Col, Row } from "react-bootstrap";
import { DataTransaction } from "../datadummy/datatransaction";
import Barcode from "../assets/barcode.png";
import Logo from "../assets/logo.png";

function Profile() {
  let { data } = DataTransaction;
  console.log(data);
  return (
    <div>
      <NavbarUser />
      <Container className="bodyProfile p-5 ps-5">
        <Row className="ps-5">
          <Col md={6} className="mt-3">
            <h2 className="myprofile mb-4">My Profile</h2>
            <Row>
              {DataProfil.map((item, index) => {
                return (
                  <div>
                    <Row>
                      <Col className="" sm={6}>
                        <img
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "5px",
                          }}
                          src={item.photo}
                        />
                      </Col>
                      <Col sm={6}>
                        <div>
                          <h3>Full Name</h3>
                          <p>{item.name}</p>
                        </div>

                        <div className="mt-4">
                          <h3>Email</h3>
                          <p>{item.email}</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
            </Row>
          </Col>
          <Col md={6} className="mt-3">
            <h2 className="mb-4">My Transaction</h2>
            <Row
              style={{
                backgroundColor: "rgb(190,190,190)",
                borderRadius: "10px",
              }}
            >
              <Col md={9}>
                {DataTransaction.map((item, index) => {
                  var { harga } = item.price;
                  var count = 0;
                  console.log(harga);

                  return (
                    <Row className="p-2">
                      <Col xs={4} md={4}>
                        <img
                          className="bg-secondary"
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "10px",
                          }}
                          src={item.image}
                        />
                      </Col>
                      <Col xs={6} md={8}>
                        <div>
                          <h4>{item.Productname}</h4>
                        </div>
                        <div>
                          <span>
                            <b>{item.day}</b>
                          </span>
                          <span>, {item.date}</span>
                        </div>
                        <div className="mt-2">
                          <span>Toping :</span>
                          <span>{item.topping}</span>
                        </div>
                        <div className="mt-2">
                          <span>Price : </span>
                          <span>{item.price} </span>
                        </div>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
              <Col md={3}>
                <img
                  style={{ width: "75%", height: "auto" }}
                  className="ms-2"
                  src={Logo}
                />
                <img
                  className="mt-4"
                  style={{ width: "100%", height: "auto" }}
                  src={Barcode}
                />
                <p className="statusTransaction ms-2 mt-2">On the Wayt</p>
                <p>120000</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
