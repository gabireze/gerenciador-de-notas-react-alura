export function save(note) {
  return {
    type: 'SAVE',
    payload: note,
  }
}

export function del(uuid) {
  return {
    type: 'DELETE',
    payload: uuid,
  }
}