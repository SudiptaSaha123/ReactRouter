import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { Support } from './components/Support';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Labs } from './components/Labs';
import { Link } from 'react-router-dom';
import { MainHeader } from './components/MainHeader';


function App() {
  return (
    <div className="App">

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/support">Support</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/labs">Labs</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/support' element={<Support/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/labs' element={<Labs/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
