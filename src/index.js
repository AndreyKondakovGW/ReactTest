import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
  *{
    font-family:
    "century gothic",
    "dejavu sans",
    "Lucida Sans Unicode",
    sans-serif;
  }
  .unselectable {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                    not supported by any browser */
  }

  #lineinput{
    width:180px;
    height:35px;
    line-height: 35px;
    margin-left:5px;
    margin-right: 5px;
    margin-top:15px;
    margin-bottom:15px;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;

}

label {
color: black;
background-color:#02dac5;
font-size: 1em;
width:180px;
height:35px;
line-height: 35px;
text-align:center;
vertical-align:middle;

margin-left:5px;
margin-right: 5px;
    
display: inline-block;
margin-top:15px;
margin-bottom: 15px;

transition-property: color;
transition-duration: 1s;
transition-timing-function: ease;

:hover{
    background-color:#018786;
    color: #f1f1f1;
    cursor: pointer;
}
  
}
#file {
  opacity: 0;
  position: absolute;
  z-index: -10000;
}
`;

  ReactDOM.render(
     
        <Styles>
          <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
          </BrowserRouter>
        </Styles>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
