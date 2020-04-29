import { connect } from 'react-redux';
import CreateConspect from './CreateConspect.jsx';
import {DELETEFOTOCreator,CHANGEPERWIEPHOTOCreator,OpenConspectAC,OpenEmptyConspect} from './../../../redux/ConspectCreater-reducer';
import {SetCurrentConspectCR,OpenEmptyCOnspectAC,LoadConspectAC} from './../../../redux/Curentconspect-reducer';
import * as axios from 'axios';

let mapStatetoProps =(state)=>{
    return {
        Conspects: state.UserDatareducer.UserData.Conspects,
        Conspectname: state.CurentCreatorreducer.CreatorData.name,
        fotos: state.CurentCreatorreducer.CreatorData.fotos,
        conspectid : state.Curentconspectreducer.LogicData.CurrentConspect.data.curentfoto.id,
        createrid : state.CurentCreatorreducer.CreatorData.id,
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
        OpenEmptyConspect:()=>{
            dispatch(OpenEmptyCOnspectAC())
            dispatch(OpenEmptyConspect())
        },
        LoadConspect:(conspectname,id,OpenConspect)=>{
            let action=LoadConspectAC(conspectname,id,OpenConspect);
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
        }
    }
}



const CreateConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(CreateConspect)

export default CreateConspectContainer