const INITIAL_STATE = {
  notes: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SAVE':
      const updatedNotes = [...state.notes, action.payload];
      return {
        ...state,
        notes: updatedNotes,
      };

    case 'DELETE':
      const filteredNotes = state.notes.filter(note => note.uuid != action.payload);
      return {
        ...state,
        notes: filteredNotes,
      };

    default:
      return state;
  };
}

