const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReduser = (state,action)=>{

    switch(action.type)
    {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                like: 5
            }
            state.posts.push(newPost)
            state.newPostText = 'qw'
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state
    }

   
}
export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}

export const UpdateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReduser