import { connect } from 'react-redux';
import Header from './Header';

let mapStatetoProps =(state)=>{
    return {
        CurentUser : state.UserDatareducer.UserData.Username.name
    }
}

const HeaderContainer=connect(mapStatetoProps)(Header);

export default HeaderContainer;