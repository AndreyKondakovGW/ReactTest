import { connect } from 'react-redux';
import {AddSubscriber} from './../../../redux/UserData-reducer';
import UserFinderForm from './UserFinder.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers
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



const UserFinderContainer=connect(mapStatetoProps,mapDispatchtoProps)(UserFinderForm)

export default UserFinderContainer