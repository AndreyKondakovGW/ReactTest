import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import { Layout } from './components/Layout';
import HeaderContainer from './components/Header/HeaderContainer'
import SideBarContainer from './components/SideBar/SideBarContainer';
import MainContainer from './components/Main/MainContainer';

const App = (props) => {
  return (
    <React.Fragment>
      <Router>
        <HeaderContainer/>
        <SideBarContainer/>
        <Layout>
        <MainContainer />
        </Layout>
      </Router>
    </React.Fragment>
  );
}
export default App;
