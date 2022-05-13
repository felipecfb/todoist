import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
