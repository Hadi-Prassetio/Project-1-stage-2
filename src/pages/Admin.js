import React from "react";
import { Table, Container } from "react-bootstrap";
import { IncomeTransaction } from "../datadummy/IncomeTransaction";
import NavbarAdmin from "../components/navbaradmin";

export default function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <div>
        <Container className="mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Address</th>
                <th>Post Code</th>
                <th>Income</th>
                <th>Status</th>
              </tr>
            </thead>
            {IncomeTransaction.map((item, index) => {
              return (
                <tbody>
                  <tr>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.postCode}</td>
                    <td>{item.income}</td>
                    <td>{item.status}</td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </Container>
      </div>
    </div>
  );
}
