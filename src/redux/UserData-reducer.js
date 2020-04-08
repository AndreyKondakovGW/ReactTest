
let initialstate={
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
    }
}


const UserDatareducer =(state=initialstate, action)=>{
    return state
}

export default UserDatareducer; 