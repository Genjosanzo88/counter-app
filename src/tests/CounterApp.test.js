/*
1.- Crear las siguientes pruebas para el <CounterApp />
    * debe de mostrar <CounterApp /> correctamente (hacer match con un snapshot)
        Y sus valores por defecto

    * debe de mostrar el valor por defecto de 100
        * usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
*/
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import React from "react";
import CounterApp from "../CounterApp";

describe('Pruebas en el <CounterApp />', () => { 

    let wrapper = shallow( <CounterApp /> );
    beforeEach ( () => {
        wrapper = shallow( <CounterApp /> ); 
    });

    test('debe de mostrar <CounterApp /> correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el valor por defecto de 0', () => { 
        const wrapper = shallow( <CounterApp value = { 100 } /> );
        const counterText = wrapper.find('h2').text().trim();
        
        expect(counterText).toBe('100')
    });

    test('debe de incrementar con el botón + 1', () => { 
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
    });

    test('debe de decrementar con el botón - 1', () => { 
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por dfecto con el boton Reset', () => {
        const wrapper = shallow( <CounterApp value = { 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105')

    });
})