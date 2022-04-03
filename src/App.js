import logo from './logo.svg';
import './App.css';
import { Button, Card} from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import Reviews from './components/Reviews/Reviews';
 
 
 


function App() {
  return (
    <div className="App">
 
     <Navigation></Navigation>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
     </Routes>

    </div>
  );
}

export default App;
