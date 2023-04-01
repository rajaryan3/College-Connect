import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Resources from './components/Resources';
import Chat from './components/Chat';
import Post from './components/Post';

function App() {
  const [currForm, setCurrForm] = useState("login")

  function toggleForm(formName) {
    setCurrForm(formName);
  }
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route exact path='/' element={currForm === 'login' ? <Login currForm={toggleForm} ></Login> : <Register currForm={toggleForm}></Register>} />
          <Route exact path='/home' element={<Dashboard />} />
          <Route exact path='/resources' element={<Resources></Resources>} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/post' element={<Post />} />
        </Routes>
      </Router>

      {/* {
        currForm === 'login' ? <Login currForm={toggleForm} ></Login> : <Register currForm={toggleForm}></Register>
      } */}

      {/* if successful login */}
      {/* <Dashboard></Dashboard> */}

    </div>
  );
}

export default App;
