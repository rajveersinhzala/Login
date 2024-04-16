import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import LandingScreen from './components/Landing-Screen';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Accountsetting from './components/Accountsetting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen/>}/>
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/settings' element={<Accountsetting/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
