import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="Wrapper">
        <Header/>
        <div className='content'>
          <Navbar/>
          <Dialogs/>
          {/* <Profile/> */}
        </div>
    </div>
  );
}

export default App;
