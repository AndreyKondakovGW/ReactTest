import { connect } from 'react-redux';
import SideBarCreatorContent from './SideBarCreatorContent.jsx';
import {ADDFOTOCreator} from './../../../redux/ConspectCreater-reducer';

let mapStatetoProps =(state)=>{
    return {
        name: state.CurentCreatorreducer.CreatorData.name,
        fotos: state.CurentCreatorreducer.CreatorData.fotos
    }

}


let mapDispatchtoProps =(dispatch) =>{
    return{
        AddFoto: (e)=>{
            let reader = new FileReader();
            let file = e.target.files[0];
            console.log(reader)
            console.log(file)
            reader.onloadend = () => {
                console.log(file)
                let name = file.name
                let path = file.name
                let image = reader.result
                const action=ADDFOTOCreator(name,path,image)
                dispatch(action)
            } 
            reader.readAsDataURL(file)          
        }
    }
}

debugger
const CreateConspectContainerSidebar=connect(mapStatetoProps,mapDispatchtoProps)(SideBarCreatorContent)

export default CreateConspectContainerSidebar