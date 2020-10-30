import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export const moveDown = keyframes`
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
`;

export const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const appear = keyframes`
  0% {
    opacity: 0;
  }

  60% {
    opacity: 0;
  }

  100% {
    opacity: 0.5;
  }
`;

export const walk = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-150vw);
  }
`;

export const slide = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-150vw);
  }
`;

const Ball = styled.div`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.3);
  text-align: center;

  .ball {
    height: 50%;
    width: auto;
    animation: ${moveDown} ease 2s;
    z-index: 99999;
    position: relative;
  }

  .beams {
    position: absolute;
    opacity: 0.5;
    width: 1000px;
    height: 1000px;
    left: 50%;
    top: 50%;
    margin-top: -550px;
    margin-left: -500px;
    z-index: 9999;
    animation: ${appear} ease 3s, ${spin} linear 5s infinite;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 50vh;
  width: 100vw;
  z-index: 9999;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0));
`;

export const Disco = (props) => {
  const ball = chrome.extension.getURL('/assets/img/disco-ball.png');
  const beams = chrome.extension.getURL('/assets/img/beams.png');

  return (
    <>
      <Ball>
        <Overlay />
        <img class="ball" src={ball} />
        <img className="beams" src={beams} />
      </Ball>
    </>
  );
};