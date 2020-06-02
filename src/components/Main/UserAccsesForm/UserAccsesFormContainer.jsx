import { connect } from 'react-redux';
import {AddSubscriber,SetCurOptionAC} from './../../../redux/UserData-reducer';
import UserAccsesForm from './UserAccsesForm.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
        CurentOption: state.UserDatareducer.CurentOption,
        CurentUser: state.UserDatareducer.UserData.Username,
        siteaddres: state.UserDatareducer.siteaddres
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return{
    }
}



const UserFinderContainer=connect(mapStatetoProps,mapDispatchtoProps)(UserAccsesForm)

export default UserFinderContainer