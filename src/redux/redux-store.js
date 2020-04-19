import { createStore, combineReducers } from "redux";
import Curentconspectreducer from './Curentconspect-reducer.js';
import UserDatareducer from './UserData-reducer.js';
import CurentCreatorreducer from './ConspectCreater-reducer';
import TagRequestReducere from './TagRequestReducere';

let reducers=combineReducers({Curentconspectreducer,UserDatareducer,CurentCreatorreducer,TagRequestReducere})

let store=createStore(reducers);

export default store;