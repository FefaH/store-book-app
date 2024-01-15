import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <CSSReset />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
