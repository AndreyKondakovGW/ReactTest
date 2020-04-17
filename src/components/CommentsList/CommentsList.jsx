import React from 'react';
import ActionBox from '../ActionBox/ActionBox.jsx';
import ModalWindow from './ModalWindow.jsx';

class CommentsList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }

    openCommentList(){
        console.log(this)
        this.setState({
            isOpen: true
        })
    }

    closeCommentList(){
        console.log("close")
        this.setState({
            isOpen: false
        })
    }

    submitCommentList(){
        this.setState({
            isOpen: false
        })
    }

    render(){
        let open=()=>{
            this.openCommentList()
        }
        let submit=()=>{
            this.submitCommentList()
        }
        let cancal=()=>{
            this.closeCommentList()
        }
        return(
            <div>
                <ActionBox text="Добавить комментарий" action={open}/>
                <ModalWindow isOpen={this.state.isOpen}
                         titel="ModalWindaow"
                         children={<textarea placeholder="Введите комментрарий"></textarea>}
                         submit={submit}
                         cancel={cancal}/>
            </div>
        )
    }

}

export default CommentsList;