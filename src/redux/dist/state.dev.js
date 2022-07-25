"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewPostText = exports.addPost = void 0;

var _render = require("../render");

var state = {
  profile: {
    message: [{
      name: "Anna",
      text: "lorena",
      time: "12:33"
    }, {
      name: "Anna",
      text: "lorena",
      time: "12:33"
    }, {
      name: "Anna",
      text: "lorena",
      time: "12:33"
    }],
    newPostText: "it-kamasutra.com",
    DialogsData: [{
      id: 1,
      name: 'Anna Nemchinova',
      last_message: 'Заедь прям сейчас',
      time: "12:50"
    }, {
      id: 2,
      name: 'Кирилл Шмелев',
      last_message: "Сам такой",
      time: "Вчера"
    }, {
      id: 3,
      name: "Маргоша",
      last_message: "Отвали я спать хочу!",
      time: "17 июл"
    }, {
      id: 4,
      name: "Светлана Герасимовна",
      last_message: "За огурацими бегом!",
      time: "9 фев"
    }]
  },
  posts: [{
    id: 1,
    text: "Это созданно через масив",
    like: 5
  }, {
    id: 2,
    text: "hi",
    like: 10
  }, {
    id: 3,
    text: "Hello World",
    like: 20
  }]
};

var addPost = function addPost(postMessage) {
  var newPost = {
    id: 5,
    text: state.profile.newPostText,
    like: 5
  };
  state.posts.push(newPost);
  state.profile.newPostText = '';
  (0, _render.rerenderEntireTree)(state);
};

exports.addPost = addPost;

var updateNewPostText = function updateNewPostText(newText) {
  state.profile.newPostText = newText;
  (0, _render.rerenderEntireTree)(state);
};

exports.updateNewPostText = updateNewPostText;
var _default = state;
exports["default"] = _default;