import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import allReducer from "../reducer/rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/es/storage";
import logger from "redux-logger";


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['carts', 'loggin']
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persitedReducer  = persistReducer(persistConfig, allReducer)
const store = createStore(persitedReducer, composeEnhancers(applyMiddleware(thunk, logger)));
export const Persistor = persistStore(store)
export default store
