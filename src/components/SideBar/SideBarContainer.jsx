import { connect } from 'react-redux';
import SideBar from './SideBar';
import {OpenEmptyConspect} from './../../redux/ConspectCreater-reducer';

let mapStatetoProps=(state)=>{
    return {
        CurrentConspect: state.Curentconspectreducer.LogicData.CurrentConspect,
        Conspects: state.UserDatareducer.UserData.Conspects
    }
}
let mapDispatchtoProps =(dispatch) =>{
    return{
        OpenEmptyConspect: ()=>{
            const action=OpenEmptyConspect()
            dispatch(action)
        }
        
    }
}

const SideBarContainer=connect(mapStatetoProps,mapDispatchtoProps)(SideBar);

export default SideBarContainer;