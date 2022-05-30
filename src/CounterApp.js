import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0 }) => {

    const [ counter, setCounter ] = useState(0);
    

    // handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    // handleSubstract
    const handleSubstract = () => {
        setCounter( counter - 1 );
    }

    // handleReset
    const handleReset = () => {
        setCounter (value)
    }

    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </Fragment>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;