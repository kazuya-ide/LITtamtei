"use client";
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Button = styled.button`
  background-color: black;
  color: white;
  border: 1px solid white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover {
    background-color: #333;
  }
`;

const Arrow = styled.span`
  border: solid white;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const MoreButton = () => {
  return (
    <Link href="/projects" passHref legacyBehavior>
      <a style={{ textDecoration: "none" }}>
        <Button>
          <Arrow />
          MORE
        </Button>
      </a>
    </Link>
  );
};

export default MoreButton;
