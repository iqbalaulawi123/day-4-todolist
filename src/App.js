import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { Navigate, Route,Routes, useNavigate } from 'react-router-dom';
import Todolist from './pages/todolist/todolist';
// import Index from './layout';
import About from './pages/about/about';
import Index from './layout';
import Home from './pages/home/home';
import FormDaftar from './pages/form-daftar/form-daftar';
import NotFound from './pages/not-found/not-found';




function App() {
  return (
    <div className="App">
        <Index>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todolist' element={<Todolist />} />
            <Route path='/form-daftar' element={<FormDaftar />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Index>
    </div>
  );
}

export default App;
