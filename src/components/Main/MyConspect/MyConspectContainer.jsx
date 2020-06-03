import { connect } from 'react-redux';
import MyConspect from './MyConspect';
import {SetConspectsAC,CheckedConspectAC,SettcurConspectpage,DeleteCheckedConspectAC,CloseAlertAC} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        AlertisOpen: state.UserDatareducer.Allertpageisopen,
        AlertText: state.UserDatareducer.AllertText,
        Conspects : state.UserDatareducer.UserData.Conspects,
        Pagesize :state.UserDatareducer.Conspectspagesize,
        Conspectcount: state.UserDatareducer.TotalConspectscount,
        CurrentPage: state.UserDatareducer.CurrentConspectPage,
        siteaddres: state.UserDatareducer.siteaddres
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        closeAlert: ()=>{
            dispatch(CloseAlertAC())
        },
        delete: ()=>{
            const action =DeleteCheckedConspectAC();
            dispatch(action)
        },
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