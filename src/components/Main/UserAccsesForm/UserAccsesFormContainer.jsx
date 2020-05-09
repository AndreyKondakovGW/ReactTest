import { connect } from 'react-redux';
import {AddSubscriber,SetCurOptionAC} from './../../../redux/UserData-reducer';
import UserAccsesForm from './UserAccsesForm.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
        CurentOption: state.UserDatareducer.CurentOption
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return{
    }
}



const UserAccsesFormContainer=connect(mapStatetoProps,mapDispatchtoProps)(UserAccsesForm)

export default UserFinderContainer