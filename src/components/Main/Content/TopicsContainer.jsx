import { connect } from 'react-redux';
import {SetTopicsAC,SettcurTopicpage} from './../../../redux/UserData-reducer';
import TopicsAPI from './Content.jsx';

let mapStatetoProps =(state)=>{
    return {
        Topics : state.UserDatareducer.UserData.Topics,
        Pagesize :state.UserDatareducer.Topicspagesize,
        Topicscount: state.UserDatareducer.TotalTopicscount,
        CurrentPage: state.UserDatareducer.CurrentTopicPage
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
        setTopics: (topics) =>{
            const action =SetTopicsAC(topics);
            dispatch(action)
        },
        setCurPage: (i)=>{
            const action = SettcurTopicpage(i)
            dispatch(action)
        }
    }
}

const MyTopicsContainer=connect(mapStatetoProps,mapDispatchtoProps)(TopicsAPI);

export default MyTopicsContainer;