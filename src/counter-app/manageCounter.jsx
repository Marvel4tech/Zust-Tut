import React from 'react'
import useCounter from '../store/useCounterStore'

export const ManageCounter = () => {
    const incrementCount = useCounter((state) => state.handleIncrementCount);

    return (
        <div className=' flex justify-center'>
            <button onClick={incrementCount} className=' mb-5 bg-black text-white text-lg font-extrabold py-1 px-6 rounded-xl'>
                Handle Counter Value
            </button>
        </div>
    )
}