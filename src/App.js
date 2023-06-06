import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import { Routes,Route } from 'react-router-dom';
import MyNav from './compornent/MyNav/MyNav';


function App() {
  return (
    <div className="App">
        <MyNav/>
        <Routes>
          <Route path='/home' Component={HomePage}/>
          <Route path='/about' Component={About}/>
        </Routes>
    </div>
  );
}

export default App;
