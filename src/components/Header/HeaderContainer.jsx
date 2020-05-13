import { connect } from 'react-redux';
import Header from './Header';
import {SetUsernameAC} from '../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        CurentUser : state.UserDatareducer.UserData.Username
    }
}

let mapDispatchtoProps =(dispatch) =>{
    return{
        SetUsername:(name)=>{
            dispatch(SetUsernameAC(name))
        }
    }
}


const HeaderContainer=connect(mapStatetoProps,mapDispatchtoProps)(Header);

export default HeaderContainer;