import React, { useContext } from "react";
import bucket from "../assets/cart.png";
import Logo from "../assets/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import { DataProfil } from "../datadummy/dataprofil";

function NavbarUser({ show }) {
  return (
    <div>
      <Container className="">
        <Navbar className="mt-5 d-flex justify-content-between ">
          <Nav className="">
            <img style={{ width: "70px" }} src={Logo} alt="" />
          </Nav>
          <Nav className="">
            <div>
              <div>
                <img src={bucket} />
                <span
                  className="badge rounded-pill bg-danger"
                  style={{ position: "absolute", top: "15px", right: "80px" }}
                >
                  {show}
                </span>

                {DataProfil.map((item, index) => {
                  return (
                    <img className="profilAccount ms-4" src={item.photo} />
                  );
                })}
              </div>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavbarUser;
