import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  background: rgba(0,0,0,0.8);
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  font-family: 'Montserrat';
  font-weight: 400;
`;

const Modal = styled.div`
  width: 500px;
  height: auto;
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: 12px;
  position: absolute;
  color: #ffffff;
  left: 50%;
  top: 50%;
  text-align: center;
  padding: 50px;
  box-sizing: border-box;
  margin-left: -250px;
  margin-top: -200px;

  button {
    appearance: none;
    background: rgba(255,255,255, 0.5);
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    margin-top: 24px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      background: rgba(255,255,255, 0.9);
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Alert = (props) => {
  return (
    <Overlay>
      <Modal>
        {props.mode === 'swear' && (
          <>
            <h1>Swear hover</h1>
            <p>Hover over words and see them appear to turn naughty....</p>
            <button onClick={props.go}>Lets go!</button>
          </>
        )}
        {props.mode === 'disco' && (
          <>
            <h1>Disco time</h1>
            <p>Get ready to party!</p>
            <button onClick={props.go}>Party time!</button>
          </>
        )}
        {props.mode === 'relax' && (
          <>
            <h1>Trip of a lifetime</h1>
            <p>Roll up a spliff and get trippy.</p>
            <button onClick={props.go}>Start the trip</button>
          </>
        )}
      </Modal>
    </Overlay>
  );
};