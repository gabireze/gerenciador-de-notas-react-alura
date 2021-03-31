const INITIAL_STATE = []

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SALVAR':
      return action.payload['title'] || action.payload['title'] ? [...state, action.payload] : state

    default:
      return state
  }
}
