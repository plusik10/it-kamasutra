const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

const messageReduser = (state,action)=>
{
    debugger;
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                name: "Константин",
                text: state.newMessageText,
                time: new Date().toLocaleTimeString().slice(0,-3)
            }
            state.Dialogs.message.push(newMessage)
            state.newMessageText = ""
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}


export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE,

    }
}

export const updateMessageCreator=(text)=>{

    return {
        
        type: UPDATE_NEW_MESSAGE,
        text: text
    }
}

export default messageReduser