import { connect } from 'react-redux';
import MyConspect from './MyConspect';
import {SetConspectsAC,CheckedConspectAC,SettcurConspectpage} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        Conspects : state.UserDatareducer.UserData.Conspects,
        Pagesize :state.UserDatareducer.Conspectspagesize,
        Conspectcount: state.UserDatareducer.TotalConspectscount,
        CurrentPage: state.UserDatareducer.CurrentConspectPage
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
        setCurPage: (i)=>{
            const action = SettcurConspectpage(i)
            dispatch(action)
        }

    }
}

const MyConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(MyConspect);

export default MyConspectContainer;