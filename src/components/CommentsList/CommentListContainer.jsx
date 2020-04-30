import { connect } from 'react-redux';
import CommentsList from './CommentsList.jsx';
import {SetCommentAC} from '../../redux/Curentconspect-reducer';
import {SetCommentCreateAC} from '../../redux/ConspectCreater-reducer';

let mapStatetoProps=(state)=>{
    return {
        Name: state.Curentconspectreducer.LogicData.CurrentConspect.name,
        CreatorName: state.CurentCreatorreducer.CreatorData.name,
        CurrentComment: state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto.comments,
        CurrentCommentCreator: state.CurentCreatorreducer.CreatorData.comments
    }
}


let mapDispatchtoProps =(dispatch) =>{
    return{
        save:(isCreater,value)=>{
            console.log("save")
            console.log(isCreater)
            const action=(isCreater)?SetCommentCreateAC(value):SetCommentAC(value)
            dispatch(action)


        },
        cancel:()=>{
            console.log("cancel")
        }
        }
    }

const CommentsListConatiner=connect(mapStatetoProps,mapDispatchtoProps)(CommentsList);

export default CommentsListConatiner;