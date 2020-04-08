import { connect } from 'react-redux';
import Redactor from './Redactor';

let mapStatetoProps =(state)=>{
    return {
        Conspectname : state.Curentconspectreducer.LogicData.CurrentConspect.name,
        Conspectpath : state.Curentconspectreducer.LogicData.CurrentConspect.path,      
        Currentpotopath: state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto.path
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        ChangeCurPR: () =>{
            dispatch({type: "ChangeCurPR"})
        },
        ChangeCurPL: ()=>{
            dispatch({type: "ChangeCurPL"})
        }
    }
}

const RedactorContainer=connect(mapStatetoProps,mapDispatchtoProps)(Redactor);

export default RedactorContainer;