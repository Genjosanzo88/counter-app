import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en el archivo 02-template-string.test.js', () => {
  test('getSaludo debe de retornar Hola paco', () => {
    const nombre = 'paco';

    const saludo = getSaludo(nombre);

    expect(saludo).toBe('Hola ' + nombre + '!');

  })  

  // getSaludo debe retornar Hola Carlos! si no hay argumento nombre

  test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre', () => {
    const saludo = getSaludo();
    expect( saludo ).toBe('Hola Carlos!' );
  }) 
})