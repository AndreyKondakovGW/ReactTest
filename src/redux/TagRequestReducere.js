const ADD_BLOCK="ADD_BLOCK";
const WRITE_REQUEST="WRITE_REQUEST";
const CHANGE_BLOCK="CHANGE_BLOCK";
const GIVE_ALL_OPTION="GIVE_ALL_OPTION";

let initialstate={
    maxIntersection: 5,
    maxUninon: 5,
    data: [[]

    ],
    pulloftag=[],
    request:""
}


const TagRequestReducere =(state=initialstate, action) =>{
    switch (action.type){
        case ADD_BLOCK:{
            if ((action.i<state.maxIntersection) && (action.j<state.maxUninon)){
                if (action.i === 0)
                    let newstate={
                        ...state,
                        data:[...state.data,[action.name]]
                    }
                else{
                    let newdata=[...state.data]
                    newdata[action.i]=[...newdata[action.i],action.name]
                    let newstate={
                        ...state,
                        data: newdata
                    }
                }
                return newstate
            }
        }
        case WRITE_REQUEST:{
                let newstate={
                    ...state,
                    request: '('+state.data.map(elm=>elm.join(' & ')).join(') | (') +')'
                }
                return newstate
            }
            default: return state
    }

}
export const ChangeBlock=(i,j,name)=>{

}
export const AddBlock=(i,j,name)=>{
    return{
        type: ADD_BLOCK,
        i=i,
        j=j,
        name=name
    }
}

export const WriteRequest=()=>{
    return{
        type: WRITE_REQUEST,
    }
}

export default TagRequestReducere