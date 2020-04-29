import bobr1 from './../static/images/bobr1.jpg'
import bobr2 from './../static/images/bobr2.jpg'
import bobr3 from './../static/images/bobr3.jpeg'
import pdf from './../static/pdf/simplePDF.pdf'
import * as axios from 'axios';


const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";
const Change_Cur_P="ChangeCurP";
const SET_COORDINATE="SET_COORDINATE";
const SET_CURRCONSPECT="SetCurrConspect";
const ADD_PHOTO="ADD_PHOTO";
const SET_CURRENTPDF="SET_CURRENTPDF";
const SET_COMMENT="SET_COMMENT";
const OPEN_EMPTY="OPEN_EMPTY";
const LOAD_CONSPECT="LOAD_CONSPECT";

let initialstate={
    LogicData:{
        CurrentConspect: {
            name: "Bobrconspect",
            id: -1,
            data: {
                fotos: [
                ],
                curentfoto: {name:"bobr2", path: bobr2, index: 1,comments:""}
            }
        },
        currentpdf: {name: "simplePDF",pdf:pdf}
    },
    Coordinate:{
        x1:0,
        x2:0,
        y1:0,
        y2:0
    }
}

const LoadConspectFromData= async (fotos,name,id,OpenConspect)=>{
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
                    f=[...f,{name: fotos.data[i].filename,path: img,index: fotos.data[i].id,comments: ""}] 
                    i+=1
                    resolve(f)                
                }
                reader.readAsDataURL(file);
            })
            f=await promise2
        }
        if (f.length==fotos.data.length){
            resolve(f)
        }
        
    })
    promise.then(result=>{
        console.log("Полученный массив фотографий")
        console.log(result) 
        OpenConspect(name,id, result)  
    })  
}

const Curentconspectreducer =(state=initialstate, action) =>{
    switch (action.type){
        case Change_Cur_PR:{
            let newstate={...state};
            newstate.LogicData={...state.LogicData}
            newstate.LogicData.CurrentConspect={...state.LogicData.CurrentConspect,data:  {...state.LogicData.CurrentConspect.data}}
            for (var i=0;i<state.LogicData.CurrentConspect.data.fotos.length;i++){
                if(state.LogicData.CurrentConspect.data.fotos[i].index===state.LogicData.CurrentConspect.data.curentfoto.index){
                    newstate.LogicData.CurrentConspect.data.curentfoto={...state.LogicData.CurrentConspect.data.fotos[(i+1) % state.LogicData.CurrentConspect.data.fotos.length]}
                }
            }
            return newstate
        }
        
        case Change_Cur_PL:{
            let newstate={...state};
            newstate.LogicData={...state.LogicData}
            newstate.LogicData.CurrentConspect={...state.LogicData.CurrentConspect,data: {...state.LogicData.CurrentConspect.data}}
            for (var i=0;i<state.LogicData.CurrentConspect.data.fotos.length;i++){
                if(state.LogicData.CurrentConspect.data.fotos[i].index===state.LogicData.CurrentConspect.data.curentfoto.index){
                    newstate.LogicData.CurrentConspect.data.curentfoto={...state.LogicData.CurrentConspect.data.fotos[(i-1+state.LogicData.CurrentConspect.data.fotos.length) % state.LogicData.CurrentConspect.data.fotos.length]}
                }
            }
            return newstate
        }
        case Change_Cur_P:{
            let newstate={
                ...state,
                LogicData: {
                    ...state.LogicData,
                    CurrentConspect:{
                        ...state.LogicData.CurrentConspect,
                        data:{
                            ...state.LogicData.CurrentConspect.data,
                            curentfoto: state.LogicData.CurrentConspect.data.fotos.find(elm=>(elm.index===action.id))
                        }
                    }
                }
            }
            return newstate;
        }
        case SET_CURRCONSPECT:{
            
            let newstate={
                ...state,
                LogicData:{
                    ...state.LogicData,
                    CurrentConspect:{
                        name: action.conspect.name,
                        id: action.conspect.id,
                        data: {
                            fotos: action.conspect.data.fotos,
                            curentfoto: action.conspect.data.fotos[0]
                        }
                    }
                }
            }
            console.log("Текущий конспект "+action.conspect.name)
            console.log(newstate.LogicData.CurrentConspect.data.curentfoto)
            return newstate
        }
        case SET_CURRENTPDF:{
            let newstate={
                ...state,
                LogicData:{
                    ...state.LogicData,
                    currentpdf: {name: action.name,pdf:action.pdf}
                }
            }
            return newstate
        }

        case ADD_PHOTO:{
            let newstate={
                ...state,
                LogicData:{
                    ...state.LogicData,
                    CurrentConspect:{
                        ...state.LogicData.CurrentConspect,
                        data: {
                            ...state.LogicData.CurrentConspect.data,
                            fotos: [...state.LogicData.CurrentConspect.data.fotos,action.photo],
                            curentfoto: state.LogicData.CurrentConspect.data.fotos[0]
                        }
                    }
                }
            }
            return newstate
        }
        case SET_COMMENT:{
            let newstate={
                ...state,
                LogicData:{
                    ...state.LogicData,
                    CurrentConspect:{
                        ...state.LogicData.CurrentConspect,
                        data:{
                            ...state.LogicData.CurrentConspect.data,
                            curentfoto: {...state.LogicData.CurrentConspect.data.curentfoto,comments:action.comment}
                        }
                    }
                }
            }
            return newstate
        }
        case OPEN_EMPTY:{
            let newstate={
                LogicData:{
                    CurrentConspect: {
                        name: "Bobrconspect",
                        id: -1,
                        data: {
                            fotos: [
                            ],
                            curentfoto: {name:"bobr2", path: bobr2, index: 1,comments:""}
                        }
                    },
                    currentpdf: {name: "simplePDF",pdf:pdf}
                }
            }
            return newstate
        }
        case LOAD_CONSPECT:{
            axios.get('http://127.0.0.1:5000/getconspectphotos/'+ action.id).then(response=>{
                console.log(response)
                LoadConspectFromData(response,action.conspectname,action.id,action.OpenConspect)
            })
        }
        case SET_COORDINATE:{
            let newstate={
                ...state,
                Coordinate:{x1:action.x1,
                x2:action.x2,
                y1:action.y1,
                y2:action.y2}
            }
            return newstate
        }
        default: return state
    }
}

export const SetCurrentConspectCR=(newconspect) =>{
    return{
        type :SET_CURRCONSPECT,
        conspect: newconspect,
    }
}

export const ChangeCurentPhotoAC=(id)=>{
    return{
        type :Change_Cur_P,
        id:id
    }
}

export const SetCurrentpdfAC=(pdf,name)=>{
    return{
        type: SET_CURRENTPDF,
        name: name,
        pdf: pdf
    }
}

export const SetCommentAC=(comment)=>{
    return{
        type: SET_COMMENT,
        comment: comment
    }
}

export const AddPhotoAC=(photo)=>{
    return{
        type: ADD_PHOTO,
        photo: photo
    }
}

export const OpenEmptyCOnspectAC=()=>{
    return{
        type: OPEN_EMPTY
    }
}

export const LoadConspectAC=(conspectname,id,OpenConspect)=>{
    return{
        type: LOAD_CONSPECT,
        conspectname: conspectname,
        id: id,
        OpenConspect:OpenConspect

    }
}

export const SetCordinateAC=(x1,x2,y1,y2)=>{
    return{
        type:SET_COORDINATE,
        x1:x1,
        x2:x2,
        y1:y1,
        y2:y2
    }
}
export default Curentconspectreducer