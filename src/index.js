import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './reset.css';
import { addPost,subscribe,updateNewPostText } from './redux/state';
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) =>{
root.render( 
  
  <React.StrictMode >
      <App state={state}  updateNewPostText={updateNewPostText} addPosts={addPost} /> 
  </React.StrictMode>
);
}
rerenderEntireTree(state);


subscribe(rerenderEntireTree)