import { connect } from 'react-redux';
import {SetCurOptionAC} from './../../../redux/UserData-reducer';
import UserFinderForm from './UserFinder.jsx';


let mapStatetoProps =(state)=>{
    return {
        Subscribers: state.UserDatareducer.UserData.Subscribers,
        CurentOption: state.UserDatareducer.CurentOption,
        SubscrubersSet: new Set(state.UserDatareducer.UserData.Subscribers.map(elm=>elm.user_id)),
        siteaddres: state.UserDatareducer.siteaddres
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        setoption:(name,id)=>{
            dispatch(SetCurOptionAC(name,id))
        }
    }
}



const UserFinderContainer=connect(mapStatetoProps,mapDispatchtoProps)(UserFinderForm)

export default UserFinderContainer