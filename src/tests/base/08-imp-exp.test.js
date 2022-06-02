import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes, {owners} from '../../data/heroes';

describe('Prueba en funciones de Héroes', () => {
    test('debe de retornar un heroe por id', () => { 
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect (heroe).toEqual(heroeData);
     })

     test('debe de retornar un undefined si el heroe no existe', () => { 
        const id = 10;
        const heroe = getHeroeById(id);

        expect (heroe).toBe(undefined);
     })

     // debe retornar un arreglo con los heroes de DC
     // owner
     // toEqual arreglo filtrado
     test('debe de retornar un heroe por owner DC', () => { 
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect (heroes).toEqual(heroeData);
     })

     // debe retornar un arreglo con los heroes de marvel
     // length = 2 toBe
     test('debe de retornar un heroe por owner Marvel', () => { 
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect (heroes.length).toBe(2);
     })
})