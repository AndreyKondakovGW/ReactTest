import { connect } from 'react-redux';
import SideBar from './SideBar';

let mapStatetoProps=(state)=>{
    return {
        CurrentConspect: state.Curentconspectreducer.LogicData.CurrentConspect,
        Conspects: state.UserDatareducer.UserData.Conspects
    }
}

const SideBarContainer=connect(mapStatetoProps)(SideBar);

export default SideBarContainer;