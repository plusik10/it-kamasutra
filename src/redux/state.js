import messageReduser from "./message-reducer"
import profileReduser from "./profile-reducer"

let store = {
    _state: {
        profilePage: {
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
        ],
        newPostText: ""
        },
        DialogPage:{
            Dialogs:{
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
            message: [{
                id: 1,
                name: "Anna",
                text: "lorena",
                time: "12:33"
                },
                {
                id: 2,
                name: "Anna",
                text: "lorena",
                time: "12:33"
                }
                ]
            },
            newMessageText: "",
            
        },
        
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("state Changed");
    },


    dispatch(action) {
       this._state.profilePage =  profileReduser(this._state.profilePage,action);
       this._state.DialogPage = messageReduser(this._state.DialogPage,action);
       this._callSubscriber(this._state)

    }


}


//action - object { type : 'ADD-POST'}


export default store
window.store = store