"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UpdateNewPostTextActionCreator = exports.addPostActionCreator = void 0;
var ADD_POST = "ADD-POST";
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

var profileReduser = function profileReduser(state, action) {
  switch (action.type) {
    case ADD_POST:
      var newPost = {
        id: 5,
        text: state.newPostText,
        like: 5
      };
      state.posts.push(newPost);
      state.newPostText = 'qw';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator() {
  return {
    type: ADD_POST
  };
};

exports.addPostActionCreator = addPostActionCreator;

var UpdateNewPostTextActionCreator = function UpdateNewPostTextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

exports.UpdateNewPostTextActionCreator = UpdateNewPostTextActionCreator;
var _default = profileReduser;
exports["default"] = _default;