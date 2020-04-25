import { connect } from 'react-redux';
import Viewer from './ConspetctViewer.jsx';
import {SetCurrentConspectCR,SetCurrentpdfAC} from './../../../redux/Curentconspect-reducer'

let mapStatetoProps =(state)=>{
    return {
        curntpdf: state.Curentconspectreducer.LogicData.currentpdf
        
    }
}
let mapDispatchtoProps =(dispatch) =>{
    return {
        setConspect: (conspects,pdf) =>{
            const action =SetCurrentConspectCR(conspects,pdf);
            dispatch(action)
        },
        setPdf: (pdf) =>{
            const action =SetCurrentpdfAC(pdf);
            dispatch(action)
        }
    }
}

const ConspectViewerContainer=connect(mapStatetoProps,mapDispatchtoProps)(Viewer);

export default ConspectViewerContainer;