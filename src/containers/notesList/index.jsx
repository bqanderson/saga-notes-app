import React from 'react';

import './style.css';

const dummyData = [
  { name: 'First Note', id: 1 },
  { name: 'Second Note', id: 2 },
  { name: 'Third Note', id: 3 },
]

const NotesList = () => {
  return (
    <div className='notes-list-wrapper'>
      <h1>Notes List</h1>
      <ul>
        { dummyData.map(item => (
          <li key={item.id}>{ item.name }</li>
        )) }
      </ul>
    </div>
  )
}

export default NotesList;