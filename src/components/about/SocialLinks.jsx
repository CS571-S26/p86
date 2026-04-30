import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div
            className="social-links mt-4 d-flex justify-content-center gap-4"
            style={{ fontSize: '1.5rem' }}
        >
            <a
                href="https://www.linkedin.com/in/nathanhan2104/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-icon-link"
            >
                <FaLinkedin />
            </a>

            <a
                href="https://www.instagram.com/natesd05/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon-link"
            >
                <FaInstagram />
            </a>

            <a
                href="https://github.com/Natesd05"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="social-icon-link"
            >
                <FaGithub />
            </a>
        </div>
    );
}