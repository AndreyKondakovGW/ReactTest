import { connect } from 'react-redux';
import Main from './Main';
import {OpenConspectAC} from '../../redux/ConspectCreater-reducer';

let mapStatetoProps=(state)=>{
    return {
        Topics : state.UserDatareducer.UserData.Topics,
        Conspects : state.UserDatareducer.UserData.Conspects,
        CurrentConspect: state.Curentconspectreducer.LogicData.CurrentConspect,
        siteaddres: state.UserDatareducer.siteaddres
    }
}


let mapDispatchtoProps =(dispatch) =>{
    return{
        GiveCurrentCOnspectCreator: (CurrentConspect)=>{
            const action=OpenConspectAC(CurrentConspect)
            dispatch(action)
        }
    }
}

const MainConatiner=connect(mapStatetoProps,mapDispatchtoProps)(Main);

export default MainConatiner;