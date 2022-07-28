import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import Avatar from "./Components/Avatar/Avatar";
import Messages from "./Components/Dialogs/Messages/Messages";

function App(props) {
 
  return (
    <div className="Wrapper">
            <Header />
      <div className="main">
      <BrowserRouter>
        <div className="Navbar">
            <Navbar />
        </div>
        <div className="content">
            <Routes>
                <Route path="/profile" element={<Avatar />} />   
            </Routes>
            <Routes>
              <Route path="/messages/*" element={<Messages
                    dispatch={props.dispatch}
                    newMessageText = {props.state.DialogPage.newMessageText}
                    message={props.state.DialogPage.Dialogs.message} />}/>
              <Route path="/dialogs/*" element={<Dialogs DialogsData={props.state.DialogPage.Dialogs.DialogsData} />} />
              <Route path="/profile" element={<Profile dispatch={props.dispatch} 
                    posts={props.state.profilePage.posts} 
                    newPostText={props.state.profilePage.newPostText}
                    />} />
              <Route path="/news" element={<News />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/music" element={<Music />} />
            </Routes>
        </div>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
