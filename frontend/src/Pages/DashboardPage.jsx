// src/pages/DashboardPage.jsx
import React from 'react';
import JobList from '../components/dashboard/JobList';
import ApplicationStatus from '../components/dashboard/ApplicationStatus';
import CalendarView from '../components/dashboard/CalenderView';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Job Portal</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <div className="text-center mb-4">
          <h1>Welcome to Your Job Dashboard</h1>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <ApplicationStatus />
          </div>
          <div className="col-md-4">
            <JobList />
          </div>
          <div className="col-md-4">
            <CalendarView />
          </div>
        </div>
      </Container>
    </>
  );
};

export default DashboardPage;