import React from 'react';

import './style.css'

const AddNewNote = () => {
  const handleChange = event => {
    console.log('TEST ===> handleChange event.taget:', event.target)
  }
  return (
    <div className='create-new-note-wrapper'>
      <h1>Create New Note</h1>
      <div className="form-wrapper">
        <input
          type="text"
          name='addTodo'
          placeholder='Enter Todo Name'
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </div>
    </div>
  )
}

export default AddNewNote;
