import img1 from './../static/images/bobr1.jpg';
import img2 from './../static/images/bobr2.jpg';
import img3 from './../static/images/bobr3.jpeg';

import * as axios from 'axios';


const SET_USERNAME="SetUsername"
const SET_TOPICS="SetTopics"
const SET_CONSPECTS="SetConspects"
const CHECKED_CONSPECT="CheckedConspect"
const DELETE_CHECKEDCONSPECT="DeleteCheckedConspect"
const SHOW_ALLERT="SHOW_ALLERT"
const SET_CUR_TOP_PAGE="Settcurtoppage"
const SET_CUR_CON_PAGE="Settcurconpage"
const CLOSEALERT="CLOSEALERT"
const ADD_SUBSCRIBER="ADD_SUBSCRIBER"
const SET_SUBSCRIBERS="SET_SUBSCRIBERS"

let initialstate={
    UserData: {
        Username: {name: "Kain",id: 0},
        Subscribers:[
            {name: "Bobrbobrovich",id: 1},
            {name: "Bobr",id: 2}
        ],
        Topics: [
            {name: "тема 1", id:1},
            {name: "тема 2", id:2},
            {name: "тема 3", id:3}],

        Conspects: [
            {name: "Ежи",id: 1,img: img1,checked: false},
            {name: "Змеи",id: 2,img: img2,checked: false},
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
        ],
        
    },

    Allertpageisopen:false,
    AllertText:"",


    Topicspagesize:6,
    TotalTopicscount:3,
    CurrentTopicPage:1,

    Conspectspagesize:4,
    TotalConspectscount:3,
    CurrentConspectPage:1,
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
                    Topics: action.topics
                },
                TotalTopicscount: action.topics.length
            }
            return newstate

        }
        case SET_CONSPECTS:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects: action.conspects.map(elm=>{return({...elm,img: img1,checked: false})})
                },
                TotalConspectscount: action.conspects.length 
            }
            return newstate
        }
        case CHECKED_CONSPECT:{
            console.log("Отмечен конспект id " + action.id)
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects: state.UserData.Conspects.map(elm=>{
                        if (elm.id===action.id){
                            return({...elm,checked: !elm.checked})
                        }
                        return elm;
                    })
                }
            }
            return newstate
        }
        case SHOW_ALLERT:{
                console.log(action.alert)
                let newstate={
                    ...state,
                    Allertpageisopen: true,
                    AllertText: action.alert
                }
                return newstate
        }
        case CLOSEALERT:{
            let newstate={
                ...state,
                Allertpageisopen: false,
            }
            return newstate
        }
        case DELETE_CHECKEDCONSPECT:{
            console.log(state.UserData.Conspects)
            state.UserData.Conspects.filter(elm=>elm.checked).forEach(elm=>
                axios.delete('http://127.0.0.1:5000/deleteconspect/'+elm.id))
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects: state.UserData.Conspects.filter(elm=>!elm.checked)
                },
                Allertpageisopen:false
            }
            return newstate
        }
        case SET_CUR_TOP_PAGE:{
            let newstate={
                ...state,
                CurrentTopicPage:action.newpage
            }
            return newstate
        }
        case SET_CUR_CON_PAGE:{
            let newstate={
                ...state,
                CurrentConspectPage:action.newpage
            }
            return newstate
        }
        case ADD_SUBSCRIBER:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Subscribers: [...state.UserData.Subscribers,{name:action.name,id:action.id}]
                }
            }
            return newstate
        }
        case SET_SUBSCRIBERS:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Subscribers:action.subcribers
                }
            }
            return newstate
        }
        default: return state
    }
}
export const SetUsernameAC=(name) =>({type :SET_USERNAME,Username: name})
export const SetTopicsAC=(topics) =>({type :SET_TOPICS,topics})
export const SetConspectsAC=(conspects) =>({type :SET_CONSPECTS,conspects})
export const CheckedConspectAC=(id)=>({type :CHECKED_CONSPECT,id})
export const DeleteCheckedConspectAC=()=>({type:DELETE_CHECKEDCONSPECT})
export const SettcurTopicpage=(newpage)=>({type:SET_CUR_TOP_PAGE,newpage})
export const SettcurConspectpage=(newpage)=>({type:SET_CUR_CON_PAGE,newpage})
export const ShowAlertAC=(alert)=>({
    type : SHOW_ALLERT,
    alert: alert
})
export const CloseAlertAC=()=>({
    type: CLOSEALERT
})
export const AddSubscriber=(name,id)=>({
    type: ADD_SUBSCRIBER,
    name:name,
    id:id
})
export const SetSubscribres=(subcribers)=>({
    type: SET_SUBSCRIBERS,
    subcribers: subcribers
})
export default UserDatareducer; 