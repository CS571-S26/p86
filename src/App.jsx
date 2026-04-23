import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Card, Row, Col, ListGroup } from 'react-bootstrap';
import AppTabs from './navigation/AppTabs';
import About from './screens/about';
import Travels from './screens/travels';
import Contact from './screens/contact';

import './App.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Container>
          <Card className="hero-card">
            <div className="hero-eyebrow">Travel Blog</div>
            <h1 className="hero-title">Welcome to my Travel Tracker</h1>
            <p className="hero-text">
              This website is a personal travel blog where I document the places I visited,
              the memories attached to them, and the foods I loved along the way.
              It is designed to let visitors explore my journey through different cities in a more interactive way.
            </p>
          </Card>
        </Container>
      </section>

      <Container className="home-content">
        <Row className="g-4 mb-4">
          <Col lg={7}>
            <Card className="blog-card feature-card h-100">
              <Card.Body>
                <p className="section-tag">Featured Experience</p>
                <h3 className="section-title">Explore the journey city by city</h3>
                <p className="section-text">
                  The Travels page is the heart of the site. Users can move through each stop
                  with the slider, view an image from that destination, and click on a highlighted
                  landmark to open a modal with more context.
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

        <Row className="g-4">
          <Col md={6}>
            <Card className="blog-card info-card h-100">
              <Card.Body>
                <p className="section-tag">Interactive Design</p>
                <h3 className="section-title">Built to feel like a digital scrapbook</h3>
                <p className="section-text">
                  Rather than listing trips in plain text, this site lets visitors move through
                  destinations visually. The mix of photos, destination notes, and clickable landmarks
                  makes the experience feel more personal and immersive.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="blog-card info-card h-100">
              <Card.Body>
                <p className="section-tag">Site Structure</p>
                <h3 className="section-title">Simple pages, clear story</h3>
                <p className="section-text">
                  The Home page introduces the project, the About page gives background about me,
                  the Travels page showcases each destination, and the Contact page gives visitors
                  a place to reach out. The layout is meant to stay simple while letting the travel content stand out.
                </p>
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