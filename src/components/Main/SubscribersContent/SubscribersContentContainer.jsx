import { connect } from 'react-redux';
import SubscribersContent from './SubscribersContent.jsx';

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

const SubscribersContentContainer=connect(mapStatetoProps)(SubscribersContent);

export default SubscribersContentContainer;