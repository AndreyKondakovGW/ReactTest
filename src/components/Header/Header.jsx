import React from 'react';
import s from './Header.module.css';

const Header=()=>{
    return (
        <nav classNmae={`${s.navbar}  ${s.navbar_fixed_top} ${s.stnavbar}`} >
		      <div className={s.navbar} >
                  <div className={s.stnavbar}>Conspect structure</div>
             </div>
        </nav>
    )
}
export default Header;