import { connect } from 'react-redux';
import MyConspect from './MyConspect';
import {SetConspectsAC,CheckedConspectAC} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        Conspects : state.UserDatareducer.UserData.Conspects
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        setConspect: () =>{
            const action =SetConspectsAC;
            dispatch(action)
        },
        checked: (id)=>{
            const action =CheckedConspectAC(id);
            dispatch(action)
        }
    }
}

const MyConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(MyConspect);

export default MyConspectContainer;