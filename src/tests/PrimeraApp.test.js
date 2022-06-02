import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';


describe('Pruebas de PrimeraApp', () => { 
    // test('debe de mostrar el mensaje "Hola, SoyGoku', () => { 
    //     const saludo = 'Hola, Soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo = { saludo } />);
    //     expect( getByText(saludo) ).toBeInTheDocument();
    //  })

    test('debe mostrar <PrimeraApp /> correctamente', () => { 
        
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo = { saludo } /> );

        expect( wrapper ).toMatchSnapshot();
     })


     test('debe de mostrar el subtitulo enviado por props', () => { 

        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';
        const wrapper = shallow(
            <PrimeraApp 
                saludo = { saludo } 
                subTitulo = { subTitulo }
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
      })

 })