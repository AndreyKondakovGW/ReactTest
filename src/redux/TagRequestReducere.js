const ADD_BLOCK="ADD_BLOCK";
const WRITE_REQUEST="WRITE_REQUEST";
const CHANGE_BLOCK="CHANGE_BLOCK";
const SET_EMPTY="SET_EMPTY";


let initialstate={
    maxIntersection: 5,
    maxUninon: 5,
    data: [
    ],
    pulloftag: [],
    request:""
}


const TagRequestReducere =(state=initialstate, action) =>{
    switch (action.type){
        case ADD_BLOCK:{
            if ((action.i<state.maxIntersection) && (action.u<state.maxUninon)){
                let newstate=state
                if (action.i === 0){
                    newstate={
                        ...state,
                        data:[...state.data,[{name: action.name,i:action.i,u:action.u}]]
                    }
                }
                else{
                    let newdata=[...state.data]
                    newdata[action.u]=[...newdata[action.u],{name: action.name,i:action.i,u:action.u}]
                    newstate={
                        ...state,
                        data: newdata
                    }
                }
                return newstate
            }
            return state
        }
        case CHANGE_BLOCK:{
            let newdata=[...state.data]
            newdata[action.u][action.i]={name: action.name,i:action.i,u:action.u}
            return {...state,data: newdata}
        }
        case WRITE_REQUEST:{
                let newstate={
                    ...state,
                    request: '( '+state.data.map(el=>el.map(e=>e.name).join(' ) & ( ')).join(' ) | ( ') +' )'
                }
                console.log(newstate.request)
                return newstate
            }
        case SET_EMPTY:{
            let newstate={
                ...state,
                data: [
                ]
            }
            return newstate
        }
            default: return state
    }
}
export const AddBlock=(i,u,name)=>{
    return{
        type: ADD_BLOCK,
        i:i,
        u:u,
        name:name
    }
}

export const WriteRequest=()=>{
    return{
        type: WRITE_REQUEST,
    }
}

export const ChangeBlock=(i,u,name)=>{
    return{
        type: CHANGE_BLOCK,
        i:i,
        u:u,
        name:name
    }
}

export const Openempty=()=>{
    return{
        type :SET_EMPTY 
    }
}

export default TagRequestReducere