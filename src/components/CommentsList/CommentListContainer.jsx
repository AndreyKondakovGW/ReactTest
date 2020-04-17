import { connect } from 'react-redux';
import CommentsList from './Main';

let mapStatetoProps=(state)=>{
    return {
    }
}


let mapDispatchtoProps =(dispatch) =>{
    return{
        cancel=()=>{
            console.log("cancel")
        }
        }
    }

const CommentsListConatiner=connect(mapStatetoProps,mapDispatchtoProps)(CommentsList);

export default CommentsListConatiner;