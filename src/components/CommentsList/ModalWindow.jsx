import React from 'react';
import ReactDOM from 'react-dom';

import ActionBox from '../ActionBox/ActionBox.jsx';
import './ModalWindow.modal.css';

class Protal extends React.Component{
    el=document.createElement('div');

    componentDidMount(){
        document.body.appendChild(this.el);
    }

    componentWillUnmount(){
        document.body.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(this.props.children,this.el)
    }
}

const ModalWindow=(props) =>{
    return(
        <>
        { props.isOpen &&
        <Protal>
            <div className="Overlay">
                <div className="Window">
                    <div className="Header">
                            <div className="s.Titel"> {props.titel}</div>
                    </div>
                    <div className="s.Body">
                        {props.children}
                    </div>
                    <div className="Footer">
                        <ActionBox text="Сохранить" action={props.submit}/>
                        <ActionBox text="Закрыть" action={props.cancel}/>
                    </div>
                </div>
            </div>
        </Protal>
        }
        </>
    )
}

export default ModalWindow;