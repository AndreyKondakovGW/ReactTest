import { connect } from 'react-redux';
import Viewer from './ConspetctViewer.jsx';
import {SetConspectsAC} from './../../../redux/UserData-reducer';
import {SetCurrentConspectCR,SetCurrentpdfAC,DataLoadSwitch} from './../../../redux/Curentconspect-reducer'

let mapStatetoProps =(state)=>{
    return {
        dataisLoading: state.Curentconspectreducer.dataisLoading,
        curntpdf: state.Curentconspectreducer.LogicData.currentpdf,
        Photos: state.Curentconspectreducer.LogicData.CurrentConspect.data.fotos
    }
}
let mapDispatchtoProps =(dispatch) =>{
    return {
        setConspect: (conspects,pdf) =>{
            const action =SetCurrentConspectCR(conspects,pdf);
            dispatch(action)
        },
        setConspects: (conspects) =>{
            const action =SetConspectsAC(conspects);
            dispatch(action)
        }, 
        setPdf: (pdf,name) =>{
            const action =SetCurrentpdfAC(pdf,name);
            dispatch(action)
        },
        LoadData: ()=>{
            dispatch(DataLoadSwitch())
        },
        OpenConspect: (name, id, fotos)=>{
            console.log("hello Container")
            const conspect={
                name:name,
                id: id,
                data: {
                    fotos: fotos
                }
            }
            console.log(conspect)
            let action=SetCurrentConspectCR(conspect)
            dispatch(action)
        }
    }
}

const ConspectViewerContainer=connect(mapStatetoProps,mapDispatchtoProps)(Viewer);

export default ConspectViewerContainer;