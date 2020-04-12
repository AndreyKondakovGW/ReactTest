const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";
const SET_CURRCONSPECT="SetCurrConspect";

let initialstate={
    LogicData:{
        CurrentConspect: {
            name: "Bobrconspect",
            path: "static/Conspect/bobrconspect",
            data: {
                fotos: [
                    {name:"bobr1", path: "bobr1.jpg",index: 0},
                    {name:"bobr2",path: "bobr2.jpg",index: 1},
                    {name:"bobr3",path: "bobr3.jpeg",index: 2}
                ],
                curentfoto: {path: "bobr2.jpg", index: 1}
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
        case SET_CURRCONSPECT:{
            console.log(2)
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

export default Curentconspectreducer