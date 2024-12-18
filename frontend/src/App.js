import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import NoteCreate from './components/Notes/NoteCreate';
import NoteList from './components/Notes/NoteList';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/"               element={<Login />} />
          <Route path="/login"          element={<Login />} />
          <Route path="/register"       element={<Register />} />
          <Route path="/notes"          element={<NoteList />} />
          <Route path="/create-note"    element={<NoteCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
