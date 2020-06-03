import { connect } from 'react-redux';
import {AddSubscriber, SetSubscribres} from './../../../redux/UserData-reducer';
import Subscriber from './Subscriber.jsx';

let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
        bobrlist: state.UserDatareducer.bobrlist,
        siteaddres: state.UserDatareducer.siteaddres
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return{
        add:()=>{
            dispatch(AddSubscriber())
        },
        setsubscribers:(subscribers)=>{
            dispatch(SetSubscribres(subscribers))
        }
    }
}



const SubscriberContainer=connect(mapStatetoProps,mapDispatchtoProps)(Subscriber)

export default SubscriberContainer
