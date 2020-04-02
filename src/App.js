import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Redactor from './components/Redactor/Redactor.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <SideBar/>
            <div className="main">
              <Route path = "/conent" render = {() => <Content Topics={props.state.Topics}/>} />
              <Route path = "/redactor" component = {Redactor} />
            </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
