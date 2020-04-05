
const Change_Cur_PR ="ChangeCurPR";
const Change_Cur_PL ="ChangeCurPL";


const Curentconspectreducer =(state, action) =>{
    switch (action.type){
        case Change_Cur_PR:{
            state.data.curentfoto=state.data.fotos[(state.data.curentfoto.index+1) % state.data.fotos.length];
            return state
        }
        case Change_Cur_PL:{
            state.data.curentfoto=state.data.fotos[(state.data.curentfoto.index-1 + state.data.fotos.length) % state.data.fotos.length];
            return state
        }
        default: return state
    }
}

export default Curentconspectreducer