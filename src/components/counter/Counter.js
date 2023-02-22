import React, { useState } from 'react';
import styles from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/counter/counterSlice';




export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');// input value
  const incrementValue = Number(incrementAmount) || 0; // increase value

  // dispatch all the actions
  const dispatch = useDispatch();

  // get count value
  const { count } = useSelector((state) => state.counter);


  return (
    <div>
      <div className={ styles.row }>
        <button
          className={ styles.button }
          aria-label="Decrement value"
          onClick={ () => dispatch(decrement(incrementValue)) }

        >
          -
        </button>
        <span className={ styles.value }>{ count }</span>
        <button
          className={ styles.button }
          aria-label="Increment value"
          onClick={ () => dispatch(increment(incrementValue)) }
        >
          +
        </button>
      </div>
      <div className={ styles.row }>
        <input
          className={ styles.textbox }
          aria-label="Set increment amount"
          value={ incrementAmount }
          onChange={ (e) => setIncrementAmount(e.target.value) }
        />
        <button
          className={ styles.button }

        >
          Add Amount
        </button>
        <button
          className={ styles.asyncButton }

        >
          Add Async
        </button>
        <button
          className={ styles.button }

        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
