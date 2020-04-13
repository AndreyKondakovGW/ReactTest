import { connect } from 'react-redux';
import {SetTopicsAC} from './../../../redux/UserData-reducer';
import Topics from './Content.jsx';

let mapStatetoProps =(state)=>{
    return {
        Topics : state.UserDatareducer.UserData.Topics
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        setTopics: (topics) =>{
            const action =SetTopicsAC(topics);
            dispatch(action)
        },
    }
}

const MyTopicsContainer=connect(mapStatetoProps,mapDispatchtoProps)(Topics);

export default MyTopicsContainer;