import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg'; // We'll need to move the image back or use a placeholder
import { profile } from '../data/profile';

function Sidebar() {
  return (
    <Navbar expand="lg" variant="dark" bg="primary" fixed="top" id="sideNav" className="flex-column">
      <Navbar.Brand href="#page-top" className="d-none d-lg-block">
        <span className="d-block d-lg-none">{profile.name}</span>
        <span className="d-none d-lg-block">
          {/* Using a placeholder if image is missing, but we should restore the original image */}
          <Image
            src={profileImage}
            alt={profile.name}
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            onError={(e) => {e.target.onerror = null; e.target.src="https://via.placeholder.com/160"}}
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="flex-column">
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#experience">Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#education">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#interests">Interests</Nav.Link>
          </Nav.Item>
           <Nav.Item>
            <Nav.Link href="#awards">Awards</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
