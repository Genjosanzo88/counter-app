import { getUser,getUsuarioActivo } from "../../base/05-funciones"

// Objeto = objeto

describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        
        const user = getUser();

        expect(user).toEqual(userTest)
    })

    //  getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debe de retornar un objeto', () => {
        const nombre = 'Fran';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid:'ABC567',
            username: nombre
        });
    })
})