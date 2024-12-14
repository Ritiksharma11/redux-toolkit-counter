import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseBy1, decreaseBy1, increaseBy5, decreaseBy5 } from '../redux/store/counterSlice'

const Counter = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increaseBy1())}>IncreaseBy1</button>
            <button onClick={() => dispatch(decreaseBy1())}>DecreaseBy1</button>
            <button onClick={() => dispatch(increaseBy5())}>IncreaseBy5</button>
            <button onClick={() => dispatch(decreaseBy5())} >DecreaseBy5</button>
        </div>
    )
}

export default Counter