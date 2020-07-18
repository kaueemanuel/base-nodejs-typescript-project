import { Usuario } from './../models/Usuario'

test('usuario ', () => {
  const usuario = new Usuario()
  usuario.nome = 'Maria'
  expect(usuario.nome).toEqual('Maria')
})
