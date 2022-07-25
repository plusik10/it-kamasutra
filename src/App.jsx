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
              <Route path="/messages/*" element={<Messages message={props.state.profile.message} />}/>
              <Route path="/dialogs/*" element={<Dialogs DialogsData={props.state.profile.DialogsData} />} />
              <Route path="/profile" element={<Profile
               updateNewPostText={props.updateNewPostText}
                posts={props.state.posts} 
                newPostText={props.state.profile.newPostText}
                 addPosts={props.addPosts} />} />
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
