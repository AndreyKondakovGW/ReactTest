import { connect } from 'react-redux';
import Viewer from './ConspetctViewer.jsx';

let mapStatetoProps =(state)=>{
    return {
        Currentpdfname: this.props.match.params.contentname
    }
}
let mapDispatchtoProps =(dispatch) =>{
    return {
    }
}

const ConspectViewerContainer=connect(mapStatetoProps,mapDispatchtoProps)(Viewer);

export default ConspectViewerContainer;