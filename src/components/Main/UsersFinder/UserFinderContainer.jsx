import { connect } from 'react-redux';
import {AddSubscriber,SetCurOptionAC} from './../../../redux/UserData-reducer';
import UserFinderForm from './UserFinder.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
        CurentOption: state.UserDatareducer.CurentOption,
        SubscrubersSet: new Set(state.UserDatareducer.UserData.Subscribers.map(elm=>elm.user_id))
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        setoption:(name,id)=>{
            console.log(name)
            dispatch(SetCurOptionAC(name,id))
        },
        setsubscribers:()=>{

        }
    }
}



const UserFinderContainer=connect(mapStatetoProps,mapDispatchtoProps)(UserFinderForm)

export default UserFinderContainer