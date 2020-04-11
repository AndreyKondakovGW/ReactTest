const SET_USERNAME="SetUsername"
const SET_TOPICS="SetTopics"
const SET_CONSPECTS="SetConspects"

let initialstate={
    UserData: {
        Username: "Kain",
        Topics: [
            {name: "тема 1", path: "topic1"},
            {name: "тема 2", path: "topic2"},
            {name: "тема 3", path: "topic3"}],

        Conspects: [
            {name: "Ежи",id: 1},
            {name: "Змеи",id: 2},
            {name: "Bobrconspect",id: 3}
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
        case SET_USERNAME:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Topics: [action.topics]
                }
            }
            return newstate

        }
        case SET_USERNAME:{
            let newstate={
                ...state,
                UserData: {
                    ...state.UserData,
                    Conspects:action.conspects
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
export default UserDatareducer; 