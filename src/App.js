import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Header from './shared/Header/Header';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Checkout from './pages/Checkout/Checkout';
import ManageService from './pages/ManageService/ManageService';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AddService from './pages/AddService/AddService';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/addservice' element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
