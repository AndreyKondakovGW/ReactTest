import { connect } from 'react-redux';
import SubscribersContent from './SubscribersContent.jsx';
import {SetConspectsAC,CheckedConspectAC,SettcurConspectpage,DeleteCheckedConspectAC,CloseAlertAC} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        Conspects : state.UserDatareducer.Subscriberdata.Conspects,
        ConspectPagesize :state.UserDatareducer.Subscriberdata.Conspectspagesize,
        Conspectcount: state.UserDatareducer.Subscriberdata.TotalConspectscount,
        ConspectCurrentPage: state.UserDatareducer.Subscriberdata.CurrentConspectPage,

        Topics: state.UserDatareducer.Subscriberdata.Topics,
        TopicsPagesize :state.UserDatareducer.Subscriberdata.Topicspagesize,
        Topicscount: state.UserDatareducer.Subscriberdata.TotalTopicscount,
        TopicsCurrentPage: state.UserDatareducer.Subscriberdata.CurrentTopicsPage,

    }
}

let mapDispatchtoProps =(dispatch) =>{
    return {
    }
}

const SubscribersContentContainer=connect(mapStatetoProps,mapDispatchtoProps)(SubscribersContent);

export default SubscribersContentContainer;