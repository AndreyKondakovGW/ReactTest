import { connect } from 'react-redux';
import Viewer from './ConspetctViewer.jsx';
import {SetCurrentConspectCR,SetCurrentpdfAC,DataLoadSwitch} from './../../../redux/Curentconspect-reducer'

let mapStatetoProps =(state)=>{
    return {
        dataisLoading: state.Curentconspectreducer.dataisLoading,
        curntpdf: state.Curentconspectreducer.LogicData.currentpdf
        
    }
}
let mapDispatchtoProps =(dispatch) =>{
    return {
        setConspect: (conspects,pdf) =>{
            const action =SetCurrentConspectCR(conspects,pdf);
            dispatch(action)
        },
        setPdf: (pdf,name) =>{
            const action =SetCurrentpdfAC(pdf,name);
            dispatch(action)
        },
        LoadData: ()=>{
            dispatch(DataLoadSwitch())
        }
    }
}

const ConspectViewerContainer=connect(mapStatetoProps,mapDispatchtoProps)(Viewer);

export default ConspectViewerContainer;