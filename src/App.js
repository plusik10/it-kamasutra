import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="Wrapper">
        <Header/>
        <div className='content'>
          <Navbar/>
          <Profile/>
        </div>
    </div>
  );
}

export default App;
