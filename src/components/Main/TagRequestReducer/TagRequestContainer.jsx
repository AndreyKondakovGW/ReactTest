TagRequestContainer
import { connect } from 'react-redux';
import CreateConspect from './CreateConspect.jsx';
import {AddBlock,WriteRequest} from './../../../redux/ConspectCreater-reducer';

let mapStatetoProps =(state)=>{
    return {
        maxIn: state.TagRequestReducere.maxIntersection,
        maxUn: state.TagRequestReducere.maxUninon,
        data: state.TagRequestReducere.data,
        request:  state.TagRequestReducere.request,
        tags: state.UserDatareducer.UserData.Topics
    }

}


const TagRequestContainer=connect(mapStatetoProps,{AddBlock,WriteRequest})(CreateConspect)

export default TagRequestContainer