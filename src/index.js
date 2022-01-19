import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import store, {Persistor} from "./redux/store-config/store"




ReactDOM.render(
 
    <Provider store={store}>
      <PersistGate  persistor={Persistor}>
       <App />

      </PersistGate>

    </Provider>,

  document.getElementById('root')
);

