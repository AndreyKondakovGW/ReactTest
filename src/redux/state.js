import Curentconspectreducer from './Curentconspect-reducer.js'

let rerenderall = () =>{
    console.log('rerendered');
}
let state ={
        UserData: {
            Username: "Kain",
            Topics: [
                {name: "тема 1", path: "topic1"},
                {name: "тема 1", path: "topic2"},
                {name: "тема 3", path: "topic3"}],

            Conspects: [
                {name: "Ежи"},
                {name: "Змеи"},
                {name: "Bobrconspect"}
            ]
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
        },


    _CallSubscriber(){

    },
    
    subscribe(observer){
        rerenderall=observer;
    },

    _ChangeConspect(name){
        console.log('rerendered');
    },

    addTopic(){

    },
    addConspect(){

    },

    dispath(action){
        this.state.LogicData.CurrentConspect = Curentconspectreducer(this.state.LogicData.CurrentConspect,action)
        rerenderall(this.state);
    }
}

export const handler=(observer)=>{
    rerenderall=observer;
}

export default state;