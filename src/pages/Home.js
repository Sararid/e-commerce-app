import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice'
export default function Home() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>Home
            <button onClick={() => dispatch(increment())}>
                increment
            </button>
            <span>{count}</span>
        </div>
    )
}
