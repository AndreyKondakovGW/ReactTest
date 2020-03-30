import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import SideBar from './components/SideBar/SideBar.jsx';
import Content from './components/Content/Content.jsx';
import Redactor from './components/Redactor/Redactor.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
            <SideBar />
            <div>
              <Route path = " /conent" component= {Content} />
              <Route path = " /redactor" component = {Redactor} />
            </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
