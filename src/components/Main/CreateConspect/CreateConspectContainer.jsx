import { connect } from 'react-redux';
import CreateConspect from './CreateConspect.jsx';
import {DELETEFOTOCreator,CHANGEPERWIEPHOTOCreator} from './../../../redux/ConspectCreater-reducer';

let mapStatetoProps =(state)=>{
    return {
        name: state.CurentCreatorreducer.CreatorData.name,
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
        }
    }
}



const CreateConspectContainer=connect(mapStatetoProps,mapDispatchtoProps)(CreateConspect)

export default CreateConspectContainer