let rerenderEntireTree = ()=>{
    console.log("state is changes")
}


let state = {
    profile:{
        message: [{
            name: "Anna",
            text: "lorena",
            time: "12:33"
        },
        {
            name: "Anna",
            text: "lorena",
            time: "12:33"
        },
        {
            name: "Anna",
            text: "lorena",
            time: "12:33"
        }
    ],
    newPostText: "it-kamasutra.com",
    DialogsData: [{
            id: 1,
            name: 'Anna Nemchinova',
            last_message: 'Заедь прям сейчас',
            time: "12:50"
        },
        {
            id: 2,
            name: 'Кирилл Шмелев',
            last_message: "Сам такой",
            time: "Вчера"
        },
        {
            id: 3,
            name: "Маргоша",
            last_message: "Отвали я спать хочу!",
            time: "17 июл"
        },
        {
            id: 4,
            name: "Светлана Герасимовна",
            last_message: "За огурацими бегом!",
            time: "9 фев"
        }
    ],
    },
    posts: [{
        id: 1,
        text: "Это созданно через масив",
        like: 5
    },
    {
        id: 2,
        text: "hi",
        like: 10
    },
    {
        id: 3,
        text: "Hello World",
        like: 20
    }
]
   }

window.state = state;

export let addPost = (postMessage) =>{

    let newPost = {
        id:5,
        text: state.profile.newPostText,
        like:5
    }
    state.posts.push(newPost)
    state.profile.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) =>{
    state.profile.newPostText =  newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer)=>{
    rerenderEntireTree = observer;
}


export default state