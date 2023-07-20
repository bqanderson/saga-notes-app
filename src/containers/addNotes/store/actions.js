import { GET_NOTE_VALUE } from './actionTypes';

export const getNoteValue = (noteValue) => {
  return {
    type: GET_NOTE_VALUE,
    noteValue
  }
}
