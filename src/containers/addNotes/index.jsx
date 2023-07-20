import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import './style.css'
import { getNoteValue } from './store/actions';

const AddNewNote = () => {
  const [noteValue, setNoteValue] = useState()

  const handleChange = event => {
    setNoteValue(event.target.value)
  }

  const handleClick = () => {
    useDispatch(getNoteValue(noteValue))
  }

  return (
    <div className='create-new-note-wrapper'>
      <h1>Create New Note</h1>
      <div className="form-wrapper">
        <input
          type="text"
          name='addTodo'
          placeholder='Enter Note Name'
          value={noteValue}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add Note</button>
      </div>
    </div>
  )
}

export default AddNewNote;
