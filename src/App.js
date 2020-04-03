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
        <SideBar/>
        <Main state={props.state}/>
      </div>
    </BrowserRouter>
  );
}
export default App;
