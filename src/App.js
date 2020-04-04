import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Main from './components/Main/Main.jsx';
import { BrowserRouter} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <SideBar CurrentConspect={props.state.LogicData.CurrentConspect}/>
        <Main state={props.state} ChangeCurPR={props.ChangeCurPR} ChangeCurPL={props.ChangeCurPL}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
