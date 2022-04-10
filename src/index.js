import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/globalStyle';
import { RatingProvider } from './provider/ratingProvider';

ReactDOM.render(
  <React.StrictMode>
    <RatingProvider >
      <GlobalStyle /> 
      <App />
    </RatingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
