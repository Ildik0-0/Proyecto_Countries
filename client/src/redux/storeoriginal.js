import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea es para que se pueda hacer peticiones a una Api/servidor
    
)


