import {createStore, applyMiddleware, compose } from 'redux';
import weather from './reducers/'
import thunk from 'redux-thunk';

const enhance=compose(applyMiddleware(thunk))
const store=createStore(weather, applyMiddleware(thunk))

export default store