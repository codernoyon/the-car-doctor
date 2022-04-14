import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import SignUp from './pages/Login/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/Services';
import Header from './shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
