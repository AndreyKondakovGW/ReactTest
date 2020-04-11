import img1 from './../static/images/bobr1.jpg';
import img2 from './../static/images/bobr2.jpg';
import img3 from './../static/images/bobr3.jpeg';

const SET_USERNAME="SetUsername"
const SET_TOPICS="SetTopics"
const SET_CONSPECTS="SetConspects"
const CHECKED_CONSPECT="CheckedConspect"

let initialstate={
    UserData: {
        Username: "Kain",
        Topics: [
            {name: "тема 1", path: "topic1"},
            {name: "тема 2", path: "topic2"},
            {name: "тема 3", path: "topic3"}],

        Conspects: [
            {name: "Ежи",id: 1,img: img1,checked: false},
            {name: "Змеи",id: 2,img: img2,checked: false},
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
        ]
    }
}


const UserDatareducer =(state=initialstate, action)=>{
    switch (action.type){
        case SET_USERNAME:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Username:action.Username
                }
            }
            return newstate
        }
        case SET_TOPICS:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Topics: [action.topics]
                }
            }
            return newstate

        }
        case SET_CONSPECTS:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects:action.conspects
                }
            }
            return newstate
        }
        case CHECKED_CONSPECT:{
            console.log(action.id)
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects: state.UserData.Conspects.map(elm=>{
                        if (elm.id==action.id){
                            return({...elm,checked: !elm.checked})
                        }
                        return elm;
                    })
                }
            }
            console.log(newstate)
            return newstate
        }
        default: return state
    }
}
export const SetUsernameAC=(name) =>({type :SET_USERNAME,Username: name})
export const SetTopicsAC=(topics) =>({type :SET_TOPICS,topics})
export const SetConspectsAC=(conspects) =>({type :SET_CONSPECTS,conspects})
export const CheckedConspectAC=(id)=>({type :CHECKED_CONSPECT,id})
export default UserDatareducer; 