import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Header from './components/header';
import NotesList from './containers/notesList';
import AddNewNote from './containers/addNotes';

import './App.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' index element={<NotesList />} />
        <Route path='/create-note' index element={<AddNewNote />} />
      </Routes>
    </div>
  );
}

export default App;
