// src/pages/RegisterPage.jsx
import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <RegisterForm />
        </div>
      </Container>
    </>
  );
};

export default RegisterPage;