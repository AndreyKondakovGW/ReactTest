import { connect } from 'react-redux';
import TagRequest from './TagRequest.jsx';
import {AddBlock,WriteRequest,ChangeBlock,Openempty} from './../../../redux/TagRequestReducere';
import {SetTopicsAC} from './../../../redux/UserData-reducer';


let mapStatetoProps =(state)=>{
    return {
        maxIn: state.TagRequestReducere.maxIntersection,
        maxUn: state.TagRequestReducere.maxUninon,
        data: state.TagRequestReducere.data,
        request:  state.TagRequestReducere.request,
        tags: state.UserDatareducer.UserData.Topics.map(e=>e.name)
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        setTopics: (topics) =>{
            const action =SetTopicsAC(topics);
            dispatch(action)
        },
        AddBlockF: (i,u,name)=>{
            const action =AddBlock(i,u,name);
            dispatch(action);
        },
        ChangeBlockF: (i,u,name) =>{
            const action =ChangeBlock(i,u,name);
            dispatch(action);
        },
        WriteRequestF: ()=>{
            const action =WriteRequest();
            dispatch(action);
        },
        Openempty: ()=>{
            dispatch(Openempty())
        }

    }
}


const TagRequestContainer=connect(mapStatetoProps,mapDispatchtoProps)(TagRequest)

export default TagRequestContainer