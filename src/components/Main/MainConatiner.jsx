import { connect } from 'react-redux';
import Main from './Main';
import {OpenConspectAC,OpenEmptyConspect} from './../../redux/ConspectCreater-reducer';

let mapStatetoProps=(state)=>{
    return {
        Topics : state.UserDatareducer.UserData.Topics,
        Conspects : state.UserDatareducer.UserData.Conspects,
        CurrentConspect: state.Curentconspectreducer.LogicData.CurrentConspect,
    }
}


let mapDispatchtoProps =(dispatch) =>{
    return{
        GiveCurrentCOnspectCreator: (CurrentConspect)=>{
            const action=OpenConspectAC(CurrentConspect)
            dispatch(action)
        },
        OpenEmptyConspect: ()=>{
            const action=OpenEmptyConspect()
            dispatch(action)
        }
        
    }
}

const MainConatiner=connect(mapStatetoProps,mapDispatchtoProps)(Main);

export default MainConatiner;