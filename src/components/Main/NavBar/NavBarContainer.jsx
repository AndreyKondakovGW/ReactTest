import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import {DeleteCheckedConspectAC,ShowAlertAC,SetConspectsAC} from './../../../redux/UserData-reducer';
import {ADDFOTOCreator,OpenConspectAC} from './../../../redux/ConspectCreater-reducer';
import {SetCurrentConspectCR,LoadConspectAC,DataLoadSwitch,SetCurrentpdfAC,CangeConspectAcsessAC} from '../../../redux/Curentconspect-reducer';
import {WriteRequest,Openempty} from './../../../redux/TagRequestReducere';
import * as axios from 'axios';
import {AddSubscriber} from './../../../redux/UserData-reducer';

let mapStatetoProps =(state)=>{
    return {
        fotos: state.CurentCreatorreducer.CreatorData.fotos,
        imagePreviewUrl: state.CurentCreatorreducer.CreatorData.imagePreviewUrl,
        Conspects: state.UserDatareducer.UserData.Conspects,
        conspectname: state.CurentCreatorreducer.CreatorData.name,
        id: state.Curentconspectreducer.LogicData.CurrentConspect.id,
        CurentConspectfotos: state.Curentconspectreducer.LogicData.CurrentConspect.data.fotos,
        topicrequest: state.TagRequestReducere.request,
        conspectispublic: state.Curentconspectreducer.LogicData.CurrentConspect.conspect_is_public
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        LoadConspectFromData: async (fotos,name,id,OpenConspect)=>{
            let promise = new Promise(async (resolve) => {
                let f=[]
                var i=0
                while (i<fotos.data.length)
                {
                    let promise = new Promise((resolve) => {
                        resolve(axios.get('http://conspect-structure.eastus.cloudapp.azure.com/getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' })) 
                    })
                    let response= await promise
                    const file = new Blob(
                        [response.data], 
                        {type: 'image'});
                    let promise2 = new Promise((resolve) => {
                        let reader = new FileReader();
                        reader.onload = function(event) {
                            const img = event.target.result
                            f=[...f,{name: fotos.data[i].filename,path: img,index: fotos.data[i].id,comments: ""}] 
                            i+=1
                            resolve(f)                
                        }
                        reader.readAsDataURL(file);
                    })
                    f=await promise2
                }
                if (f.length===fotos.data.length){
                    resolve(f)
                }
                
            })
            promise.then(result=>{
                OpenConspect(name,id, result)  
            })  
        },
        add:()=>{
            console.log("add")
            dispatch(AddSubscriber())
        },
        ShowAlert:(Conspects)=>{
            let alertT=[]
            let promise = new Promise(async (resolve) => {
                var i=0
                while (i<Conspects.filter(elm=>elm.checked).length){
                    let promise = new Promise((resolve) => {
                        resolve(axios.get('http://conspect-structure.eastus.cloudapp.azure.com/related_tags/'+Conspects.filter(elm=>elm.checked)[i].id)) 
                    })
                    let response= await promise
                    alertT=[...alertT,{name: Conspects.filter(elm=>elm.checked)[i].name,tags: response.data.map(elm=>elm.tag_name).join()}]
                    i+=1
                }
                if (alertT.length===Conspects.filter(elm=>elm.checked).length){
                    resolve(alertT)
                }
            })
            promise.then(result=>{
                if  (!result.every(elm=>elm.tags===""))
                {
                    dispatch(ShowAlertAC(result.map(elm=>"Тэги: " + elm.tags +" из конспекта " + elm.name).join("\n")))
                }else{
                    dispatch(DeleteCheckedConspectAC());
                }
            })
        },
        AddFoto: (e)=>{
            let reader = new FileReader();
            let file = e.target.files[0];
            debugger;
            reader.onloadend = () => {
                let name = file.name
                let id = "null"
                let image = reader.result
                const action=ADDFOTOCreator(name,id,image,file)
                dispatch(action)
            } 
            reader.readAsDataURL(file)          
        },
        OpenConspect: (name, id, fotos)=>{
            const conspect={
                name:name,
                id: id,
                data: {
                    fotos: fotos
                }
            }
            let action=SetCurrentConspectCR(conspect)
            dispatch(action)
            let action2=OpenConspectAC(conspect)
            dispatch(action2)
        },
        SaveConspect: async (name,fotos,id,CurentConspectfotos,OpenConspect,routing)=>{
            dispatch(DataLoadSwitch())
            const OldIDs=new Set (CurentConspectfotos.map(elm=>elm.index))
            const NewIDs=new Set (fotos.map(elm=>elm.index))
            OldIDs.forEach(elm=>{
                if (!NewIDs.has(elm)){
                    axios.delete('http://conspect-structure.eastus.cloudapp.azure.com/deletephoto/'+ elm)
                }
            })
            axios.put('http://conspect-structure.eastus.cloudapp.azure.com/put_conspect/'+name+"/False").then(async function(response){
                let promise1 = new Promise(async (resolve) => {
                var i=0
                while (i<fotos.length){
                    if (fotos[i].index==="null"){
                        let formData = new FormData();
                        formData.append('file', fotos[i].file);
                        await new Promise((resolve, reject) => {
                            resolve(axios.post('http://conspect-structure.eastus.cloudapp.azure.com/savephoto/'+ response.data.conspect_id,
                                formData,
                                {
                                    headers: {'Content-Type': 'multipart/form-data'}
                                }
                            ).then(function(response){
                                console.log(response);
                                i++
                            } 
                        ))})
                    }else{
                        i++
                    }
                }
                if (i===fotos.length){
                    console.log(i)
                    resolve()
                }
                })
                promise1.then(res=>{
                    routing(name,response.data.conspect_id)
                    document.location.reload(true);
                })
                /*
                fotos.forEach(elm=>{
                    if (elm.index==="null"){
                        let formData = new FormData();
                        formData.append('file', elm.file);
                        console.log(formData)
                        axios.post('http://conspect-structure.eastus.cloudapp.azure.com/savephoto/'+ response.data.conspect_id,
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                        ).then(function(response){
                            console.log(response);
                        }).catch(function(error){
                            console.log(error);
                          });
                    }
                })
                */
            })
            let action=LoadConspectAC(name,id,OpenConspect);
            dispatch(action);
        },
        LoadData: ()=>{
            dispatch(DataLoadSwitch())
        },
        setPdf: (pdf,name) =>{
            const action =SetCurrentpdfAC(pdf,name);
            dispatch(action)
        },
        setConspects: (conspects) =>{
            const action =SetConspectsAC(conspects);
            dispatch(action)
        },
        WriteRequestF: ()=>{
            const action =WriteRequest();
            dispatch(action);
        },
        Openempty: ()=>{
            dispatch(Openempty())
        },
        CangeConspectAcsess: (is_public)=>{
            dispatch(CangeConspectAcsessAC(is_public))
        }

    }
}



const NavBarContainer=connect(mapStatetoProps,mapDispatchtoProps)(NavBar)

export default NavBarContainer