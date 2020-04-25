import bobr1 from './../static/images/bobr1.jpg'
import bobr2 from './../static/images/bobr2.jpg'
import bobr3 from './../static/images/bobr3.jpeg'
import pdf from './../static/pdf/simplePDF.pdf'


const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";
const Change_Cur_P="ChangeCurP";
const SET_CURRCONSPECT="SetCurrConspect";
const ADD_PHOTO="ADD_PHOTO";
const SET_CURRENTPDF="SET_CURRENTPDF";
const SET_COMMENT="SET_COMMENT";

let initialstate={
    LogicData:{
        CurrentConspect: {
            name: "Bobrconspect",
            path: "static/Conspect/bobrconspect",
            data: {
                fotos: [
                    {name:"bobr1", path: bobr1,index: 0,comments:""},
                    {name:"bobr2",path: bobr2,index: 1,comments:""},
                    {name:"bobr3",path: bobr3,index: 2,comments:""}
                ],
                curentfoto: {name:"bobr2", path: bobr2, index: 1,comments:""}
            }
        },
        currentpdf: pdf,
    },
}

const Curentconspectreducer =(state=initialstate, action) =>{
    switch (action.type){
        case Change_Cur_PR:{
            let newstate={...state};
            newstate.LogicData={...state.LogicData}
            newstate.LogicData.CurrentConspect.data.curentfoto={...state.LogicData.CurrentConspect.data.curentfoto}
            newstate.LogicData.CurrentConspect.data.curentfoto=newstate.LogicData.CurrentConspect.data.fotos[(newstate.LogicData.CurrentConspect.data.curentfoto.index+1) % newstate.LogicData.CurrentConspect.data.fotos.length];
            return newstate
        }
        case Change_Cur_PL:{
            let newstate={...state};
            newstate.LogicData={...state.LogicData}
            newstate.LogicData.CurrentConspect.data.curentfoto={...state.LogicData.CurrentConspect.data.curentfoto}
            newstate.LogicData.CurrentConspect.data.curentfoto=newstate.LogicData.CurrentConspect.data.fotos[(newstate.LogicData.CurrentConspect.data.curentfoto.index-1+ newstate.LogicData.CurrentConspect.data.fotos.length) % newstate.LogicData.CurrentConspect.data.fotos.length];
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
                            curentfoto: state.LogicData.CurrentConspect.data.fotos[0]
                        }
                    }
                }
            }
            console.log("Текущий конспект "+action.conspect.name)
            return newstate
        }
        case SET_CURRENTPDF:{
            let newstate={
                ...state,
                LogicData:{
                    ...state.LogicData,
                    currentpdf: action.pdf
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

export const SetCurrentpdfAC=(pdf)=>{
    return{
        type: SET_CURRENTPDF,
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
export default Curentconspectreducer