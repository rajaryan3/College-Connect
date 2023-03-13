import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [currForm, setCurrForm] = useState("login")

  function toggleForm(formName) {
    setCurrForm(formName);
  }
  return (
    <div className="App">
      <h1>saksham</h1>

      {
        currForm === 'login' ? <Login currForm={toggleForm} ></Login> : <Register currForm={toggleForm}></Register>
      }

    </div>
  );
}

export default App;
