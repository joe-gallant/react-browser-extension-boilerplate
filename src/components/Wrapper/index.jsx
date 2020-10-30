import React, { useState } from 'react';
import styled from 'styled-components';
import { Alert } from '../Alert';
import { Disco } from '../Disco';
import { SwearHover } from '../SwearHover';
import { Relax } from '../Relax';

const Container = styled.div`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
  position: fixed;
  right: 24px;
  top: 24px;
  z-index: 999999999;
  font-family: 'Montserrat';
  font-weight: 400;

  img {
    border-radius: 12px;
  }
`;

const MenuBar = styled.div`
  margin-top: 12px;
  padding: 24px 0 0;
  box-sizing: border-box;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  transform: translateX(${props => props.appOpen ? '0' : '250px' });
  transition: all ease 0.5s;

  ul {
    margin: 0;
    margin-top: 24px;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 24px;
    font-size: 14px;
    background: rgba(0,0,0,0.2);
    cursor: pointer;
    border-top: 1px solid rgba(255,255,255, 0.3);

    &:hover {
      background: rgba(0,0,0,0.3);
    }

    &.active {
      font-weight: 500;
      background: rgba(0,0,0,0.5);
    }

    &.stop {
      margin-top: 40px;
      background: rgba(0,0,0,0.8);
    }
  }
`;

export const Wrapper = () => {
  const [mode, setMode] = useState('');
  const [active, setActive] = useState(false);
  const [appOpen, setAppOpen] = useState(false);
  const url = chrome.extension.getURL('/assets/img/hackday.png');

  const changeMode = (type) => {
    setMode(type);
    setActive(false);
  }

  return (
    <>
      <Container>
        <img onClick={() => setAppOpen(!appOpen)} src={url} width="220" height="69" style={{ cursor: 'pointer' }} />

        <MenuBar appOpen={appOpen}>
          Pointless menu:

          <ul>
            <li className={mode === 'swear' ? 'active' : null} onClick={() => changeMode('swear')}>Swear hover</li>
            <li className={mode === 'disco' ? 'active' : null} onClick={() => changeMode('disco')}>Disco time</li>
            <li className={mode === 'relax' ? 'active' : null} onClick={() => changeMode('relax')}>Get trippy</li>

            {mode ? (
              <li className="stop" onClick={() => changeMode('')}>Stop!</li>
            ):(
              <li className="stop" onClick={() => setAppOpen(false)}>Close</li>
            )}
            
          </ul>
        </MenuBar> 
      </Container>

      {mode === 'swear' && active && <SwearHover />}
      {mode === 'disco' && active && <Disco />}
      {mode === 'relax' && active && <Relax />}

      {mode && !active && <Alert mode={mode} go={() => setActive(true)} />}
    </>
  );
};