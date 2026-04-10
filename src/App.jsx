import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap'
import AppTabs from './navigation/AppTabs'
import About from './screens/about'
import Travels from './screens/travels'
import Contact from './screens/contact'

function Home() {
  return (
    <Container className="mt-4">
      <Card className="p-4 bg-light mb-4">
        <h1>Welcome to my Travel Tracker!</h1>
        <p className="lead mb-0">
          This is a project developed by me for the CS571 Web Project.
          It is a simple application to track my travels and share them.
          It also has a slider that allows you to see my travels in real time. Have fun exploring!
        </p>
      </Card>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="p-4">
            <h3>Main Interactive Elements</h3>
            <p>
              The main feature of this website is an interactive time slider that lets users move
              through different parts of my travel journey. As the slider changes, the page updates
              to show different destinations, along with text and images connected to each place.
            </p>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="p-4">
            <h3>What Each Destination Will Include</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Cities I visited</ListGroup.Item>
              <ListGroup.Item>When I was there</ListGroup.Item>
              <ListGroup.Item>What made the place meaningful to me</ListGroup.Item>
              <ListGroup.Item>My favorite foods I ate there</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <Card className="p-4">
            <h3>Site Structure</h3>
            <p>
              The site is organized into several main pages. The Home page introduces the project
              and gives an overview of what the website includes. The About page explains the purpose
              of the project and gives background information about me. The Travels page is the main
              interactive section where users can explore destinations using the slider. There is also
              a Contact page where visitors can submit questions or comments.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

function App() {
  return (
    <div>
      <AppTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App