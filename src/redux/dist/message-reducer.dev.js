"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateMessageCreator = exports.addMessageCreator = void 0;
var ADD_MESSAGE = "ADD_MESSAGE";
var UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";

var messageReduser = function messageReduser(state, action) {
  debugger;

  switch (action.type) {
    case ADD_MESSAGE:
      var newMessage = {
        id: 3,
        name: "Константин",
        text: state.newMessageText,
        time: new Date().toLocaleTimeString().slice(0, -3)
      };
      state.Dialogs.message.push(newMessage);
      state.newMessageText = "";
      return state;

    case UPDATE_NEW_MESSAGE:
      state.newMessageText = action.text;
      return state;

    default:
      return state;
  }
};

var addMessageCreator = function addMessageCreator() {
  return {
    type: ADD_MESSAGE
  };
};

exports.addMessageCreator = addMessageCreator;

var updateMessageCreator = function updateMessageCreator(text) {
  return {
    type: UPDATE_NEW_MESSAGE,
    text: text
  };
};

exports.updateMessageCreator = updateMessageCreator;
var _default = messageReduser;
exports["default"] = _default;