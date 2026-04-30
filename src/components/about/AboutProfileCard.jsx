import React from 'react';
import { Card, Image } from 'react-bootstrap';

import nathanImg from '../../assets/Nathan.jpeg';
import SocialLinks from './SocialLinks';

export default function AboutProfileCard() {
    return (
        <Card className="mb-4 blog-card">
            <Card.Body className="text-center">
                <Image
                    src={nathanImg}
                    alt="Nathan Han"
                    roundedCircle
                    fluid
                    className="mb-4 profile-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        objectFit: 'cover',
                        border: '4px solid white',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.15)'
                    }}
                />

                <Card.Title className="mb-3">About Me</Card.Title>

                <Card.Text>
                    My name is Nathan Han, and I am a Computer Science and Data Science student at
                    the University of Wisconsin–Madison. My background includes experience in
                    software engineering, AI, data analytics, and research, with work spanning
                    React, Flask, Python, JavaScript, data pipelines, and NLP systems.
                </Card.Text>

                <Card.Text>
                    This project reflects both my personal interests and technical interests. It
                    combines storytelling, travel, and interactive design while also giving me a
                    way to build a meaningful full-stack style web project using tools I want to
                    grow in as a developer.
                </Card.Text>

                <SocialLinks />
            </Card.Body>
        </Card>
    );
}