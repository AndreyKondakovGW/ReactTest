import { connect } from 'react-redux';
import Redactor from './Redactor';
import {ChangeCurentPhotoAC} from './../../../redux/Curentconspect-reducer'

let mapStatetoProps =(state)=>{
    return {
        Photos: state.Curentconspectreducer.LogicData.CurrentConspect.data.fotos,
        Conspectname : state.Curentconspectreducer.LogicData.CurrentConspect.name,
        curentfoto : state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto,      
        Currentpotopath: state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto.path,
        Conspects: state.UserDatareducer.UserData.Conspects
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        ChangeCurPR: () =>{
            dispatch({type: "ChangeCurPR"})
        },
        ChangeCurPL: ()=>{
            dispatch({type: "ChangeCurPL"})
        },
        ChangeCurentPhoto: (id)=>{
            let action=ChangeCurentPhotoAC(id)
            dispatch(action)
        }
    }
}

const RedactorContainer=connect(mapStatetoProps,mapDispatchtoProps)(Redactor);

export default RedactorContainer;