import { connect } from 'react-redux';
import NavBar from './NavBar.jsx';
import {DeleteCheckedConspectAC,ShowAlertAC,SetConspectsAC} from './../../../redux/UserData-reducer';
import {ADDFOTOCreator,OpenConspectAC} from './../../../redux/ConspectCreater-reducer';
import {SetCurrentConspectCR,LoadConspectAC,DataLoadSwitch,SetCurrentpdfAC} from '../../../redux/Curentconspect-reducer';
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
        topicrequest: state.TagRequestReducere.request
    }

}

let mapDispatchtoProps =(dispatch) =>{
    return{
        LoadConspectFromData: async (fotos,name,id,OpenConspect)=>{
            let promise = new Promise(async (resolve, reject) => {
                let f=[]
                var i=0
                while (i<fotos.data.length)
                {
                    let promise = new Promise((resolve, reject) => {
                        console.log("Запрашиваю картинку по id"+fotos.data[i].id)
                        resolve(axios.get('http://127.0.0.1:5000/getphotobyid/'+ fotos.data[i].id,{ responseType: 'blob' })) 
                    })
                    let response= await promise
                    const file = new Blob(
                        [response.data], 
                        {type: 'image'});
                    let promise2 = new Promise((resolve, reject) => {
                        let reader = new FileReader();
                        reader.onload = function(event) {
                            const img = event.target.result
                            console.log(img)
                            console.log(i)
                            f=[...f,{name: fotos.data[i].filename,path: img,index: fotos.data[i].id,comments: ""}] 
                            i+=1
                            resolve(f)                
                        }
                        reader.readAsDataURL(file);
                    })
                    f=await promise2
                }
                if (f.length==fotos.data.length){
                    console.log(f)
                    resolve(f)
                }
                
            })
            promise.then(result=>{
                console.log("Полученный массив фотографий")
                console.log(result) 
                OpenConspect(name,id, result)  
            })  
        },
        add:()=>{
            console.log("add")
            dispatch(AddSubscriber())
        },
        ShowAlert:(Conspects)=>{
            let alertT=[]
            console.log(Conspects.filter(elm=>elm.checked))
            let promise = new Promise(async (resolve, reject) => {
                var i=0
                while (i<Conspects.filter(elm=>elm.checked).length){
                    let promise = new Promise((resolve, reject) => {
                        resolve(axios.get('http://127.0.0.1:5000/related_tags/'+Conspects.filter(elm=>elm.checked)[i].id)) 
                    })
                    let response= await promise
                    alertT=[...alertT,{name: Conspects.filter(elm=>elm.checked)[i].name,tags: response.data.map(elm=>elm.tag_name).join()}]
                    i+=1
                }
                console.log(alertT)
                if (alertT.length==Conspects.filter(elm=>elm.checked).length){
                    resolve(alertT)
                }
            })
            promise.then(result=>{
                console.log(result)
                if  (!result.every(elm=>elm.tags==""))
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
            console.log(reader)
            debugger;
            console.log(file)
            reader.onloadend = () => {
                console.log(file)
                let name = file.name
                let id = "null"
                let image = reader.result
                const action=ADDFOTOCreator(name,id,image,file)
                dispatch(action)
            } 
            reader.readAsDataURL(file)          
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
        SaveConspect: (name,fotos,id,CurentConspectfotos,OpenConspect,routing)=>{
            console.log("Пытаюсь сохранит конспект")
            console.log(name)
            console.log(fotos)
            console.log(CurentConspectfotos)
            const OldIDs=new Set (CurentConspectfotos.map(elm=>elm.index))
            const NewIDs=new Set (fotos.map(elm=>elm.index))
            OldIDs.forEach(elm=>{
                if (!NewIDs.has(elm)){
                    axios.delete('http://127.0.0.1:5000/deletephoto/'+ elm)
                    console.log("элемент был удалён " + elm)
                }
            })
            console.log(OldIDs)
            axios.put('http://127.0.0.1:5000/put_conspect/'+name+"/False").then(response=>{
                console.log(response.data.conspect_id)
                fotos.forEach(elm=>{
                    if (elm.index=="null"){
                        console.log("новая фотка:"+ elm.name)
                        let formData = new FormData();
                        formData.append('file', elm.file);
                        axios.post('http://127.0.0.1:5000/savephoto/'+ response.data.conspect_id,
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                        ).then(function(response){
                            console.log('SUCCESS!!');
                            console.log(response)
                        }).catch(function(){
                            console.log('FAILURE!!');
                          });
                    }
                })
                //routing(response.data.conspect_id,name)
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
            dispatch(Openempty());
        },
        Openempty: ()=>{
            dispatch(Openempty())
        }
    }
}



const NavBarContainer=connect(mapStatetoProps,mapDispatchtoProps)(NavBar)

export default NavBarContainer