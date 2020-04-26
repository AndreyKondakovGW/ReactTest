import { connect } from 'react-redux';
import CreateConspect from './CreateConspect.jsx';
import {DELETEFOTOCreator,CHANGEPERWIEPHOTOCreator,OpenConspectAC} from './../../../redux/ConspectCreater-reducer';
import {SetCurrentConspectCR} from './../../../redux/Curentconspect-reducer'

let mapStatetoProps =(state)=>{
    return {
        Conspects: state.UserDatareducer.UserData.Conspects,
        fotos: state.CurentCreatorreducer.CreatorData.fotos,
        imagePreviewUrl: state.CurentCreatorreducer.CreatorData.imagePreviewUrl
    }

}


let mapDispatchtoProps =(dispatch) =>{
    return{
        DeleteFoto: (name)=>{
            const action =DELETEFOTOCreator(name);
            dispatch(action);
        },
        ChangePerwie: (name) =>{
            const action =CHANGEPERWIEPHOTOCreator(name);
            dispatch(action);
        },
        OpenConspect: (name, id, fotos)=>{
            console.log("hello Container")
            
            const conspect={
                name:name,
                id: id,
                data: {
                    fotos: fotos
                }
            }
            console.log(conspect)
            let action=SetCurrentConspectCR(conspect)
            dispatch(action)
            let action2=OpenConspectAC(conspect)
            dispatch(action2)
        },
    }
}



const CreateConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(CreateConspect)

export default CreateConspectContainer