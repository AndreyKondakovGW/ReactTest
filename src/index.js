import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state,{handler,ChangeCurPR,ChangeCurPL} from './redux/state';

let rerenderall =()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} ChangeCurPR={ChangeCurPR} ChangeCurPL={ChangeCurPL}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderall(state);
handler(rerenderall);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
