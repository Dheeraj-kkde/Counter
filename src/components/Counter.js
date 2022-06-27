import React from 'react';
import '../App.css';
import { useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from '../actions/index';


const Counter = () => {

    const myState = useSelector((state)=>{return state.reducer1});
    const dispatch = useDispatch();

    return(
        <div className='container'>
        <h1>Counter</h1>
        <h4>Using React and Redux</h4>
        <div className="quantity">
          <button className='quantity__minus'  onClick={ () => dispatch(decNumber(1))}>-</button>
          <input name='quantity' type='text' className='quantity__input' value={myState}/>
          <button className='quantity__plus'  onClick={ () => dispatch(incNumber(1))}>+</button>
        </div>
      </div>
    )
}

export default Counter;