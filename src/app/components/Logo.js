'use client'

import React from 'react';
import styled, { keyframes } from 'styled-components';

const SchizoLogo = () => {
  return (
    <LogoContainer>
      <MainLogo>SCHIZSO</MainLogo>
      <Subtitle>Interior Design & FitOut</Subtitle>
    </LogoContainer>
  );
};

// Animations (simplified for smaller size)
const glitch = keyframes`
  0%, 100% { transform: translate(0); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-1px, -1px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Compact styled components
const LogoContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLogo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: #000;
  margin: 0;
  line-height: 1;
  animation: ${glitch} 3s infinite alternate;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0.3rem 0;
  color: #bfc6b9;
  animation: ${fadeIn} 1s ease-in;
`;

const Locations = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  color: #bfc6b9;
  display: flex;
  gap: 0.8rem;
  margin-top: 0.3rem;

  span {
    position: relative;
    &::after {
      content: "•";
      position: absolute;
      right: -0.5rem;
      color: #aaa;
    }
    &:last-child::after {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
    gap: 0.6rem;
  }
`;

export default SchizoLogo;