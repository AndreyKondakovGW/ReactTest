
const ADD_FOTO ="Add_Foto";
const DELETE_FOTO ="Delete_Foto";
const CHANGE_PERWIE_PHOTO="Change_Perwie_Photo";
const OPEN_CONSPECT="Open_Conspect";
const OPEN_EMPTY_CONSPECT="Open_Empty_Conspect";

let initialstate={
        CreatorData: {
            name: "",
            path: "",
            fotos: [
                {name: "Empty",path: "EmptyPath"}
            ],
            imagePreviewUrl:''
        }
}

const CurentCreatorreducer =(state=initialstate, action) =>{
    switch (action.type){
        case ADD_FOTO:{
            let newstate={
                ...state,
                CreatorData: {
                    ...state.CreatorData,
                    imagePreviewUrl: action.img,
                    fotos: [...state.CreatorData.fotos,{name: action.name,path: action.img}]
                },

            };
            return newstate
        }
        case DELETE_FOTO:{
            let newstate={...state};
            newstate.CreatorData={...state.CreatorData};
            newstate.CreatorData.fotos=state.CreatorData.fotos.slice()
            for (var i=0;i<newstate.CreatorData.fotos.length;i++){
                if(newstate.CreatorData.fotos[i].name === action.name) {
                    newstate.CreatorData.fotos.splice(i, 1);
                }
            }
            return newstate
        }
        case CHANGE_PERWIE_PHOTO:{
            let newstate={...state};
            newstate.CreatorData={...state.CreatorData};
            for (let i=0;i<newstate.CreatorData.fotos.length;i++){
                if(newstate.CreatorData.fotos[i].name === action.name) {
                    newstate.CreatorData.imagePreviewUrl=newstate.CreatorData.fotos[i].path;
                }
            }
            return newstate
        }
        case OPEN_EMPTY_CONSPECT:{
            let newstate={
                CreatorData: {
                    name: "",
                    path: "",
                    fotos: [
                        {name: "Empty",path: "EmptyPath"}
                    ],
                    imagePreviewUrl:''
                }
            }
            return newstate
        }
        case OPEN_CONSPECT:{
            let newstate={
                CreatorData: {
                    name: action.name,
                    path: action.path,
                    fotos: action.fotos.map(elm => {return {...elm,path: elm.path}}),
                    imagePreviewUrl: action.fotos[0].imagePreviewUrl
                }
            }
            return newstate
        }
        default: {
            return state}
    }
}

export const ADDFOTOCreator = (name,path,img) =>{
    return{
        type: ADD_FOTO,
        name: name,
        path: path,
        img:img
    }
}

export const DELETEFOTOCreator = (name) =>{
    return{
        type: DELETE_FOTO,
        name: name
    }
}

export const CHANGEPERWIEPHOTOCreator =(name) =>{
    return{
        type: CHANGE_PERWIE_PHOTO,
        name:name
    }
}

export const OpenConspectAC=(conspect)=>{
    return{
        type: OPEN_CONSPECT,
        name: conspect.name,
        path: conspect.path,
        fotos:conspect.data.fotos,
    }
}

export const OpenEmptyConspect=()=>{
    return{
        type: OPEN_EMPTY_CONSPECT
    }
}

export default CurentCreatorreducer