import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../landingPages.css";

export default function AuthModal() {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  function SwitchLogin() {
    setShow(false);
    setShowRegister(true);
  }
  function SwitchRegister() {
    setShowRegister(false);
    setShow(true);
  }

  return (
    <>
      <Button
        className="buttonLogin"
        style={{ color: "red", backgroundColor: "white", borderColor: "red" }}
        onClick={handleShow}
      >
        Login
      </Button>
      <Button
        className="buttonRegister"
        style={{ color: "white", backgroundColor: "red" }}
        onClick={handleShowRegister}
      >
        Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="m-4">
          <Modal.Title>
            <h1 className="mb-4">Login</h1>
          </Modal.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{ borderColor: "red" }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ borderColor: "red" }}
                autoFocus
              />
            </Form.Group>
          </Form>
          <Button
            style={{ width: "100%", backgroundColor: "red" }}
            onClick={handleClose}
          >
            Login
          </Button>
          <p className="mt-4" style={{ color: "black" }}>
            Don't have an account ? click{" "}
            <a onClick={SwitchLogin} style={{ cursor: "pointer" }}>
              <b>Here</b>
            </a>
          </p>
        </div>
      </Modal>

      <Modal show={showRegister} onHide={handleCloseRegister}>
        <div className="m-4">
          <Modal.Title>
            <h1 className="mb-4">Register</h1>
          </Modal.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                style={{ borderColor: "red" }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                style={{ borderColor: "red" }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Full Name"
                style={{ borderColor: "red" }}
                autoFocus
              />
            </Form.Group>
          </Form>
          <Button
            style={{ width: "100%", backgroundColor: "red" }}
            onClick={handleCloseRegister}
          >
            Register
          </Button>
          <p className="mt-4" style={{ color: "black" }}>
            Already have an account? click{" "}
            <a onClick={SwitchRegister} style={{ cursor: "pointer" }}>
              <b>Here</b>
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
}
