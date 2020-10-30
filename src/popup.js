import 'libs/polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'themes/default';

const Popup = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      This is a pointless extension.
    </ThemeProvider>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Popup />, root);
