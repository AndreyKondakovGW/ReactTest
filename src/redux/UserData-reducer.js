import img1 from './../static/images/bobr1.jpg';
import img2 from './../static/images/bobr2.jpg';
import img3 from './../static/images/bobr3.jpeg';

import i1 from '../static/images/1.jpg';
import i2 from '../static/images/2.jpg';
import i3 from '../static/images/3.jpg';
import i4 from '../static/images/4.jpg';
import i5 from '../static/images/5.jpg';
import i6 from '../static/images/6.jpg';
import i7 from '../static/images/7.jpg';
import i8 from '../static/images/8.jpg';
import i9 from '../static/images/9.jpg';
import i10 from '../static/images/10.jpg';
import i11 from '../static/images/11.jpg';
import i12 from '../static/images/12.jpg';
import i13 from '../static/images/13.jpeg';
import i14 from '../static/images/14.jpeg';
import i15 from '../static/images/15.jpeg';
import i16 from '../static/images/16.jpeg';
import i17 from '../static/images/17.jpg';
import i18 from '../static/images/18.jpg';
import i19 from '../static/images/19.jpg';
import i20 from '../static/images/20.jpg';
import i21 from '../static/images/21.jpg';
import i22 from '../static/images/22.jpg';
import i23 from '../static/images/23.jpg';
import i24 from '../static/images/24.jpg';
import i25 from '../static/images/25.jpeg';

import * as axios from 'axios';
import Siteaddres from './Siteaddres'

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
    siteaddres: Siteaddres,
    bobrmass:[i1,i2,i3,i4,i5,i6,i7,i8,i9,i10,i11,i12,i13,i14,i15,i16,i17,i18,i19,i20,i21,i22,i23,i24,i25],
    UserData: {
        Username: "",
        Subscribers:[
            {username: "Bobr",id: 2,av: i1}
            /*{username: "Bobrbobrovichadadadadadadadadadadad",id: 1,av: i1},
            {username: "Bobr",id: 2,av: i1},
            {username: "Andrey",id: 4,av: i2},
            {username: "Sergey",id: 5,av: i3},
            {username: "Nurey",id: 6,av: i4},
            {username: "Vanya",id: 7,av: i5},
            {username: "Nastya",id: 8,av: i6},
            {username: "Sofia",id: 9,av: i7},
            {username: "Nikita",id: 10,av: i8},
            {username: "Artyomochka",id: 11,av: i9},
            {username: "Albert-Molbert",id: 12,av: i10}
            ,
            {username: "Daneel",id: 12,av: i11}
            ,
            {username: "Iluha",id: 12,av: i12}
            ,
            {username: "Kekus",id: 12,av: i13},
            {username: "BOG_DAN",id: 12,av: i14}
            ,
            {username: "Eru$",id: 12,av: i15}
            ,
            {username: "Dasha",id: 12,av: i16}
            ,
            {username: "Disipticon",id: 12,av: i17}
            ,
            {username: "Kisipticon",id: 12,av: i18}
            ,
            {username: "Money",id: 12,av: i19}
            ,
            {username: "Blackjack",id: 12,av: i20}
            ,
            {username: "Anime",id: 12,av: i21}*/
        ],
        Topics: [
            {name: "тема 1", id:1},
            /*{name: "тема 2", id:2},
            {name: "тема 3", id:3},
            {name: "непра", id:4},
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5},{name: "тема 1", id:1},
            {name: "тема 2", id:2},
            {name: "тема 3", id:3},
            {name: "непра", id:4},
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5},{name: "тема 1", id:1},
            {name: "тема 2", id:2},
            {name: "тема 3", id:3},
            {name: "непра", id:4},
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}
            ,
            {name: "алгем", id:5}*/
        ],
            
            

        Conspects: [
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            {name: "Ежииииииииииииииииииииииииииииииии",id: 1,img: img1,checked: false},
            {name: "Змеи",id: 2,img: img2,checked: false},
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
            {name: "Bobrconspect",id: 3,img: img3,checked: false}
            ,
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
        Conspectspagesize:10,
        TotalConspectscount:20,
        CurrentConspectPage:1,
        
        Topicspagesize:3,
        TotalTopicscount:100,
        CurrentTopicsPage:1,
    },
    CurentOption: "",

    Allertpageisopen:false,
    AllertText:"",


    Topicspagesize:30,
    TotalTopicscount:3,
    CurrentTopicPage:1,

    Conspectspagesize:20,
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
            state.UserData.Conspects.filter(elm=>elm.checked).forEach(elm=>
                axios.delete(state.siteaddres + 'deleteconspect/'+elm.id))
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
            axios.post(state.siteaddres + 'add_friend/'+state.CurentOption.id)
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Subscribers: [...state.UserData.Subscribers,{username:state.CurentOption.name,user_id: state.CurentOption.id,av: state.bobrmass[Math.floor(Math.random() * (state.bobrmass.length - 0)) + 0]}]
                },
                CurentOption: ""
            }
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
                    Subscribers:action.subcribers.map(function(elm){return({...elm,av: state.bobrmass[Math.floor(Math.random() * (state.bobrmass.length - 0)) + 0]})})
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