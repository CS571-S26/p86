import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AppTabs() {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/travels">My Travels</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default AppTabs