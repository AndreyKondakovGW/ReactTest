import React from 'react';
import s from './Header.module.css';

const Header=(props)=>{
    return (
        <div className={s.head}>
            <div className={s.logo}>
                Conspect structure
            </div>
            <div className={s.user}>
                {props.CurentUser}
            </div>
            
        </div>
    )
}
export default Header;