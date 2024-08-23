'use client';

import React,{useState} from 'react'



const page = () => {
    
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    const reset=()=>{
        setCount(0);
    }

    return (
        <div>

            <h1 className='border w-96 h-20  bg-yellow-400 text-black align-center'>{count}</h1>
            <br/>
            <button onClick={increment} className='border text-white bg-gray-700 p-2 w-32'>increment</button>
    
            <button onClick={decrement} className='border text-white bg-red-700 p-2 w-32'>decrement</button>
    
            <button onClick={reset} className='border text-white bg-green-700 p-2 w-32'>Reset</button>
        </div>
    )
}

export default page