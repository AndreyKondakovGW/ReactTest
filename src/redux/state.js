let rerenderall = () =>{
    console.log('rerendered');
}

let state = {
    UserData: {
        Topics: [
            {name: "тема 1", path: "topic1"},
            {name: "тема 1", path: "topic2"},
            {name: "тема 3", path: "topic3"}],

        Conspects: [
            {name: "Ежи"},
            {name: "Змеи"},
            {name: "Bobrconspect"}
        ],
    },

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
    }
}

export const IncFtoIndexRight = () =>{
    return(state.LogicData.CurrentConspect.data.curentfoto.index + 1) % state.LogicData.CurrentConspect.data.fotos.length;
}
export const IncFtoIndexLeft = () =>{
    return (state.LogicData.CurrentConspect.data.curentfoto.index - 1 + state.LogicData.CurrentConspect.data.fotos.length) % state.LogicData.CurrentConspect.data.fotos.length;
}

export const ChangeCurPR =() =>{
    state.LogicData.CurrentConspect.data.curentfoto=state.LogicData.CurrentConspect.data.fotos[IncFtoIndexRight()];
    rerenderall(state);
}

export const ChangeCurPL= ()=>{
    state.LogicData.CurrentConspect.data.curentfoto=state.LogicData.CurrentConspect.data.fotos[IncFtoIndexLeft()];
    rerenderall(state);
}

export const handler=(observer)=>{
    rerenderall=observer;
}

export default state;