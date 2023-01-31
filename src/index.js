import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from 'utils/extendTheme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-project-petly">
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
