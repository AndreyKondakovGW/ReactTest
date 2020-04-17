import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import {DeleteCheckedConspectAC} from './../../../redux/UserData-reducer';
import {ADDFOTOCreator} from './../../../redux/ConspectCreater-reducer';
import {SetCurrentConspectCR} from '../../../redux/Curentconspect-reducer';

let mapStatetoProps =(state)=>{
    return {
        fotos: state.CurentCreatorreducer.CreatorData.fotos,
        imagePreviewUrl: state.CurentCreatorreducer.CreatorData.imagePreviewUrl,
        Conspects: state.UserDatareducer.UserData.Conspects
    }

}


let mapDispatchtoProps =(dispatch) =>{
    return{
        deleted: ()=>{
            const action =DeleteCheckedConspectAC();
            dispatch(action)
        },
        AddFoto: (e)=>{
            let reader = new FileReader();
            let file = e.target.files[0];
            console.log(reader)
            debugger;
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
        },
        SaveConspect: (name,fotos)=>{
            console.log(name)
            console.log(fotos)
            const conspect={
                name:name,
                path:name,
                data:{
                    fotos:fotos
                }}
            console.log(conspect)
            const action=SetCurrentConspectCR(conspect)
            dispatch(action)
        }
    }
}



const NavBarContainer=connect(mapStatetoProps,mapDispatchtoProps)(NavBar)

export default NavBarContainer