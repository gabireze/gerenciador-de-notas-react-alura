export function Salvar(title, text) {
  return {
    type: 'SALVAR',
    payload: { title, text },
  }
}