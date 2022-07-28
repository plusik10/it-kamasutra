"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _messageReducer = _interopRequireDefault(require("./message-reducer"));

var _profileReducer = _interopRequireDefault(require("./profile-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = {
  _state: {
    profilePage: {
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
      }],
      newPostText: ""
    },
    DialogPage: {
      Dialogs: {
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
        }],
        message: [{
          id: 1,
          name: "Anna",
          text: "lorena",
          time: "12:33"
        }, {
          id: 2,
          name: "Anna",
          text: "lorena",
          time: "12:33"
        }]
      },
      newMessageText: ""
    }
  },
  subscribe: function subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState: function getState() {
    return this._state;
  },
  _callSubscriber: function _callSubscriber() {
    console.log("state Changed");
  },
  dispatch: function dispatch(action) {
    this._state.profilePage = (0, _profileReducer["default"])(this._state.profilePage, action);
    this._state.DialogPage = (0, _messageReducer["default"])(this._state.DialogPage, action);

    this._callSubscriber(this._state);
  }
}; //action - object { type : 'ADD-POST'}

var _default = store;
exports["default"] = _default;
window.store = store;