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
    "Lucida Sans Unicode",
    sans-serif;
  }
`;

  ReactDOM.render(

        <Styles>
          <BrowserRouter>
            <Provider store={store}>
            <App/>
            </Provider>
          </BrowserRouter>
        </Styles>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
