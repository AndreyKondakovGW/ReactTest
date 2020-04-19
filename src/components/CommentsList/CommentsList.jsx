import React from 'react';
import ActionBox from '../ActionBox/ActionBox.jsx';
import ModalWindow from './ModalWindow.jsx';
import { LayoutTextSidebarReverse } from 'react-bootstrap-icons';
import styled from 'styled-components';
const StyledCommentsList = styled.div`
    display: block;
`;
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
            <StyledCommentsList>
                <ActionBox text="Комментарий" icon={<LayoutTextSidebarReverse/>} action={open}/>
                <ModalWindow  isOpen={this.state.isOpen}
                         titel="ModalWindaow"
                         children={<textarea placeholder="Введите комментрарий"></textarea>}
                         submit={submit}
                         cancel={cancal}/>
            </StyledCommentsList>
        )
    }

}

export default CommentsList;