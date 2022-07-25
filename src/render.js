import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import './reset.css';

import { addPost } from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) =>{
root.render( 
  
  <React.StrictMode >
      <App state={state} addPosts={addPost} /> 
  </React.StrictMode>
);
}