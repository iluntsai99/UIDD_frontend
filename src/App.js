import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header/Header';
import FixedBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Chats from './Pages/Chats/Chats';
import Groups from './Pages/Groups/Groups';
import Heart from './Pages/Heart/Heart';
import Profile from './Pages/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
          <Container>
            <Routes>
              <Route path='/home' Component={Home}/>
              <Route path='/chats' Component={Chats}/>
              <Route path='/groups' Component={Groups}/>
              <Route path='/heart' Component={Heart}/>
              <Route path='/profile' Component={Profile}/>
            </Routes>
          </Container>
      </div>
      <FixedBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
