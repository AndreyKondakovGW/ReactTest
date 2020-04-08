
const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";

let initialstate={
    LogicData:{
        CurrentConspect: {
            name: "Bobrconspect",
            path: "static/Conspect/bobrconspect",
            data: {
                fotos: [
                    {path: "bobr1.jpg",index: 0},
                    {path: "bobr2.jpg",index: 1},
                    {path: "bobr3.jpeg",index: 2}
                ],
                curentfoto: {path: "bobr2.jpg", index: 1},
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
            console.log(newstate.LogicData.CurrentConspect.data.fotos)
            newstate.LogicData.CurrentConspect.data.curentfoto=newstate.LogicData.CurrentConspect.data.fotos[(newstate.LogicData.CurrentConspect.data.curentfoto.index+1) % newstate.LogicData.CurrentConspect.data.fotos.length];
            console.log("PR")
            return newstate
        }
        case Change_Cur_PL:{
            let newstate={...state};
            newstate.LogicData={...state.LogicData}
            newstate.LogicData.CurrentConspect.data.curentfoto={...state.LogicData.CurrentConspect.data.curentfoto}
            newstate.LogicData.CurrentConspect.data.curentfoto=newstate.LogicData.CurrentConspect.data.fotos[(newstate.LogicData.CurrentConspect.data.curentfoto.index-1+ newstate.LogicData.CurrentConspect.data.fotos.length) % newstate.LogicData.CurrentConspect.data.fotos.length];
            console.log("PL")
            return newstate
        }
        default: return state
    }
}

export default Curentconspectreducer