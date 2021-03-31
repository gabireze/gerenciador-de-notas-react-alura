const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SAVE':
      return action.payload['title'] || action.payload['text'] ? [...state, action.payload] : state

    default:
      return state
  }
}
