import bobr1 from './../static/images/bobr1.jpg'
import bobr2 from './../static/images/bobr2.jpg'
import bobr3 from './../static/images/bobr3.jpeg'

const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";
const Change_Cur_P="ChangeCurP";
const SET_CURRCONSPECT="SetCurrConspect";

let initialstate={
    LogicData:{
        
        CurrentConspect: {
            name: "Bobrconspect",
            path: "static/Conspect/bobrconspect",
            data: {
                fotos: [
                    {name:"bobr1", path: bobr1,index: 0},
                    {name:"bobr2",path: bobr2,index: 1},
                    {name:"bobr3",path: bobr3,index: 2}
                ],
                curentfoto: {name:"bobr2", path: bobr2, index: 1}
            }
        }
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
                        path: action.conspect.path,
                        data: {
                            fotos: [action.conspect.data.fotos
                            ],
                            curentfoto: action.conspect.data.fotos[0],
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
        conspect: newconspect
    }
}

export const ChangeCurentPhotoAC=(id)=>{
    return{
        type :Change_Cur_P,
        id:id
    }
}
export default Curentconspectreducer