import { connect } from 'react-redux';
import MyConspect from './MyConspect';
import {SetConspectsAC,CheckedConspectAC,DeleteCheckedConspectAC} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        Conspects : state.UserDatareducer.UserData.Conspects
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        setConspect: (conspects) =>{
            const action =SetConspectsAC(conspects);
            dispatch(action)
        },
        checked: (id)=>{
            const action =CheckedConspectAC(id);
            dispatch(action)
        },
        deletechecked: ()=>{
            const action =DeleteCheckedConspectAC();
            dispatch(action)
        }

    }
}

const MyConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(MyConspect);

export default MyConspectContainer;