"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function SocialLinks() {
  const containerStyle = {
    marginTop: '20px',
    padding: '15px 20px',
    backgroundColor: '#2e343a',
    color: '#fff',
    borderRadius: '0',
    fontSize: '1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as React.CSSProperties['textAlign'], // Type assertion
    width: '100%',
  };

  const headingStyle = {
    fontSize: '1em',
    fontWeight: 'normal',
    marginRight: '15px',
    marginLeft: '0px',
  };

  const iconWrapperStyle = {
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '0',
    marginRight: '5px',
  };

  const linkStyle = {
    color: 'black',
    transition: 'color 0.3s ease-in-out',
    textDecoration: 'none',
    display: 'inline-block',
  };

  const iconStyle = {
    fontSize: '1.2em',
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>SNS公式アカウント</p>
      <div style={{ display: 'flex' }}>
        <div style={iconWrapperStyle}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faFacebookF} style={iconStyle} />
          </a>
        </div>
        <div style={iconWrapperStyle}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </a>
        </div>
        <div style={iconWrapperStyle}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;