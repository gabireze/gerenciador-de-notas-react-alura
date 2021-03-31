export function Save(title, text) {
  return {
    type: 'SAVE',
    payload: { title, text },
  }
}