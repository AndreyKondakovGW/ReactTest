import { connect } from 'react-redux';
import Main from './Main';

let mapStatetoProps=(state)=>{
    return {
        Topics : state.UserDatareducer.UserData.Topics,
        Conspects : state.UserDatareducer.UserData.Conspects,
        CurrentConspect: state.Curentconspectreducer.LogicData.CurrentConspect,
    }
}

const MainConatiner=connect(mapStatetoProps)(Main);

export default MainConatiner;