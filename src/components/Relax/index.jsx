import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export const bounce = keyframes`
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1.7) rotate(15deg);
  }

  40% {
    transform: scale(0.9) rotate(-10deg);
  }

  60% {
    transform: scale(1.5) rotate(5deg);
  }

  80% {
    transform: scale(1) rotate(15deg);
  }

  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: absolute;
  z-index: 99999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  pointer-events: none;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);

  .pusher {
    position: absolute;
    left: 98%;
    bottom: 0;
    width: 15%;
    z-index: 9999;
  }

  .relax {
    position: absolute;
    left: 100%;
    bottom: 0;
    width: calc(100vw + 30%);
    height: 100%;
    z-index: 999;
  }

  .head {
    left: 165%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
    position: absolute;
    width: 200px;
    height: auto;
    z-index: 9999;
    animation: ${bounce} ease 2s infinite;
  }
`;

export const Relax = (props) => {
  const relax = chrome.extension.getURL('/assets/img/trip.gif');
  const pusher = chrome.extension.getURL('/assets/img/pusher.gif');
  const head = chrome.extension.getURL('/assets/img/head.png');

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.transition = "all linear 5s";
    document.getElementsByTagName("body")[0].style.transform = "translateX(-115%)";
  }, []);

  return (
    <>
      <Container>
        <img className="pusher" src={pusher} />
        <img className="relax" src={relax} />
        <img className="head" src={head} />
      </Container>
    </>
  );
};