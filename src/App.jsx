import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import AppTabs from './navigation/AppTabs';
import About from './screens/about';
import Travels from './screens/travels';
import Contact from './screens/contact';
import 'leaflet/dist/leaflet.css';

import './App.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <Card className="hero-card">
            <div className="hero-eyebrow">Travel Blog</div>
            <h1 className="hero-title">Welcome to my 2025-2026 Travel Tracker</h1>
            <p className="hero-text">
              Welcome to my personal travel blog where I document the places I visited,
              the memories attached to them, and my favorite foods I loved along the way.
            </p>
          </Card>
        </Container>
      </section>

      <Container className="home-content">
        <Row className="g-4 mb-4">
          <Col lg={7}>
            <Card className="blog-card feature-card h-100">
              <Card.Body>
                <p className="section-tag">Interactive Experience</p>
                <h3 className="section-title">Explore the journey city by city</h3>
                <p className="section-text">
                  The Travels page is the heart of the site. Users can move through each stop
                  with the slider, view an image from that destination, and click on a highlighted
                  landmark to learn more about these beautiful places.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card className="blog-card h-100">
              <Card.Body>
                <p className="section-tag">What You’ll Find</p>
                <ListGroup variant="flush" className="travel-list">
                  <ListGroup.Item>Cities I visited</ListGroup.Item>
                  <ListGroup.Item>When I was there</ListGroup.Item>
                  <ListGroup.Item>Why each place mattered to me</ListGroup.Item>
                  <ListGroup.Item>Favorite foods from each destination</ListGroup.Item>
                  <ListGroup.Item>Landmarks with extra details</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <AppTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;