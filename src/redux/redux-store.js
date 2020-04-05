import { createStore, combineReducers } from "redux";
import Curentconspectreducer from './Curentconspect-reducer.js'

let reducers=combineReducers(Curentconspectreducer)

let store=createStore(reducers);

export default store;