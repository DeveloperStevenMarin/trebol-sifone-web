import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './components/general/themes/ThemeContext';
//import { store } from './config/store';
//import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/integration/react';
//import { persistStore } from 'redux-persist';

//const peristor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<PersistGate persistor={peristor}>*/}
    {/*<Provider store={store}>*/}
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/*</Provider>*/}
    {/* </PersistGate> */}
  </React.StrictMode>
);
