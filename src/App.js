//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';
import StudentDelete from './pages/StudentDelete';
import StudentDetails from './pages/StudentDetails';
import StudentRegister from './pages/StudentRegister';
import StudentView from './pages/StudentView';
import StudentUpdate from './pages/StudentUpdate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/student/register' element={<StudentRegister/>}/>
        <Route path='/student/update' element={<StudentUpdate/>}/>
        <Route path='/student/delete' element={<StudentDelete/>}/>
        <Route path='/student/view' element={<StudentView/>}/>
        <Route path='/student/view/:id' element={<StudentDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
