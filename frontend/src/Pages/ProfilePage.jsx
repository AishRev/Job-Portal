// src/pages/ProfilePage.jsx
import React from 'react';
import ProfileForm from '../components/profile/ProfileForm';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <h1 className="text-center mb-4">Complete Your Profile</h1>
        <ProfileForm />
      </Container>
    </>
  );
};

export default ProfilePage;