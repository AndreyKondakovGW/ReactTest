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
width: 100%;
height: 100vh;
  *{
    font-family:
    "century gothic",
    "dejavu sans",
    "Lucida Sans Unicode",
    sans-serif;
  }
  a, .actionbox, #filelabel {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           /* Non-prefixed version, currently
                                    not supported by any browser */
  }

/*inputs*/

#file {
  opacity: 0;
  position: absolute;
  z-index: -10000;
}

#lineinput{

    width:180px;
    height:35px;
    line-height: 35px;
      padding:1px;
      outline:0px;
      box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
      transition-property: box-shadow;
      transition-duration: .3s;
      
        :focus{
          box-shadow: 0 0 4px 1px rgb(119, 90, 163);
        }
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

#textlabel{
  margin:0px;
}

#filelabel {
padding:0px;
border-radius: 0%;
border: 0px;
color: black;
background-color:#02dac5;
font-size: 1em;
width:180px;
height:35px;
line-height: 35px;
text-align:center;
vertical-align:middle;
    
display: inline-block;

transition-property: color;
transition-duration: 1s;
transition-timing-function: ease;

box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, .3);
transition-property: box-shadow;
transition-duration: .3s;
:hover{
    background-color:#018786;
    color: #f1f1f1;
    cursor: pointer;
    box-shadow: none;
}
  
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
