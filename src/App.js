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
import TestApi from './pages/test-api/test-api';
import TestApiDetail from './pages/test-api/test-api-detail';
import TodolistRedux from './pages/todolist-redux/todolist-redux';
import TodolistReduxPersist from './pages/todolist-redux-persist/todolist-redux-persist';




function App() {
  return (
    <div className="App">
        <Index>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todolist' element={<Todolist />} />
            <Route path='/todolist-redux' element={<TodolistRedux />} />
            <Route path='/todolist-redux-persist' element={<TodolistReduxPersist />} />
            <Route path='/form-daftar' element={<FormDaftar />} />
            <Route path='/about' element={<About />} />
            <Route path='/test-api' element={<TestApi/>} />
            <Route path='/test-api/detail/:id' element={<TestApiDetail/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Index>
    </div>
  );
}

export default App;
