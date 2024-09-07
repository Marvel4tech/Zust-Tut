import React from 'react'
import useCounter, { useActions } from '../store/useCounterStore'

export const ManageCounter = () => {
    const { handleIncrementCount } = useActions()

    return (
        <div className=' flex justify-center'>
            <button onClick={handleIncrementCount} className=' mb-5 bg-black text-white text-lg font-extrabold py-1 px-6 rounded-xl'>
                Handle Counter Value
            </button>
        </div>
    )
}