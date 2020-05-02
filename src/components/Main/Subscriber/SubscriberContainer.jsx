import { connect } from 'react-redux';
import {AddSubscriber,SetSubscribres} from './../../../redux/UserData-reducer';
import Subscriber from './Subscriber.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        add:(name,id)=>{
            let action = AddSubscriber(name,id)
            dispatch(action)
        },
        SearchUsers:(str)=>{
            
        },
        setsubscribers:()=>{

        }
    }
}



const SubscriberContainer=connect(mapStatetoProps,mapDispatchtoProps)(Subscriber)

export default SubscriberContainer
