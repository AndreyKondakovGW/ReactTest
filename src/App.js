import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import SideBarContainer from './components/SideBar/SideBarContainer';
import MainConatiner from './components/Main/MainConatiner';


const App = (props) => {
  return (
      <div className="wrapper">
        <HeaderContainer/>
        <SideBarContainer/>
        <MainConatiner />
      </div>
  );
}
export default App;
