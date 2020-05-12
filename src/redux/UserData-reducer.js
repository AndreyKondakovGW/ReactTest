import img1 from './../static/images/bobr1.jpg';
import img2 from './../static/images/bobr2.jpg';
import img3 from './../static/images/bobr3.jpeg';

import * as axios from 'axios';


const SET_USERNAME="SetUsername"
const SET_TOPICS="SetTopics"
const SET_CONSPECTS="SetConspects"
const CHECKED_CONSPECT="CheckedConspect"
const DELETE_CHECKEDCONSPECT="DeleteCheckedConspect"

const SET_CUR_TOP_PAGE="Settcurtoppage"
const SET_CUR_CON_PAGE="Settcurconpage"

const CLOSEALERT="CLOSEALERT"
const SHOW_ALLERT="SHOW_ALLERT"

const ADD_SUBSCRIBER="ADD_SUBSCRIBER"
const SET_SUBSCRIBERS="SET_SUBSCRIBERS"
const SET_CUR_OPTION="SET_CUR_OPTION"


let initialstate={
    UserData: {
        Username: "",
        Subscribers:[
            {username: "Bobrbobrovich",id: 1},
            {username: "Bobr",id: 2},
            {username: "Andrey",id: 3},
            {username: "Sergey",id: 4}
            ,
            {username: "Nurey",id: 5}
            ,
            {username: "Nastya",id: 6}
            ,
            {username: "Sofia",id: 7}
            ,
            {username: "Anyakonda",id: 8}
            ,
            {username: "Vanya",id: 9}
            ,
            {username: "ImperorOfHumor",id: 10}
            ,
            {username: "Alkl",id: 11}
            ,
            {username: "Lena",id: 12}
            ,
            {username: "Yana",id: 13}
            ,
            {username: "MihChern",id: 14}
            ,
            {username: "Iluha",id: 15}
            ,
            {username: "Daneel",id: 16}
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
    Subscriberdata:{
        Topics: [
            {name: "тема 1", id:1},
            {name: "тема 2", id:2},
            {name: "тема 3", id:3}],
        Conspects: [
            {name: "Ежи",id: 1,img: img1},
            {name: "Змеи",id: 2,img: img2},
            {name: "Bobrconspect",id: 3,img: img3}
        ], 
        Conspectspagesize:3,
        TotalConspectscount:3,
        CurrentConspectPage:1,
        
        Topicspagesize:3,
        TotalTopicscount:3,
        CurrentTopicsPage:1,
    },
    CurentOption: "",

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
            console.log(newstate)
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
            if (state.CurentOption!==""){
            axios.post('http://127.0.0.1:5000/add_friend/'+state.CurentOption.id)
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Subscribers: [...state.UserData.Subscribers,{username:state.CurentOption.name,id:state.CurentOption.id}]
                },
                CurentOption: ""
            }
            console.log("Добавлен поверенный: "+state.CurentOption.name+" "+state.CurentOption.id)
            return newstate
            }else{
                return state
            }
        }
        case SET_SUBSCRIBERS:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Subscribers:action.subcribers
                },
                CurentOption: ""
            }
            return newstate
        }
        case SET_CUR_OPTION:{
            let newstate={
                ...state,
                CurentOption:{name: action.name,id:action.id}
            }
            return newstate
        }
        default: return state
    }
}
export const SetUsernameAC=(name) =>({type :SET_USERNAME,Username:name})
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
export const AddSubscriber=()=>({
    type: ADD_SUBSCRIBER
})
export const SetSubscribres=(subcribers)=>({
    type: SET_SUBSCRIBERS,
    subcribers: subcribers
})

export const SetCurOptionAC=(name,id)=>({
    type: SET_CUR_OPTION,
    name:name,
    id:id
})

export default UserDatareducer; 