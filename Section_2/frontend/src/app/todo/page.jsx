'use client'
import React, {useState} from 'react'

const Todo = () => {

  const [todoList , setTodoList]=useState([])

  const addNewTodo=(e)=>{
    if(e.code==='Enter' && e.target.value.trim()!==''){
      setTodoList([...todoList,e.target.value.trim() ])
      console.log(todoList)
      e.target.value=''
    }
  }

  const removeTodo=(index)=>{
    const temp=todoList;
    temp.splice(index,1);
    setTodoList([...temp])
  }

  return (
    <div className='h-screen flex items-center flex-col mt-10 '>

        <h1 className='text-4xl font-bold mb-8'>
            my todo list
        </h1>

        <div className='w-full md:w-1/2'>
          <input 
            type='text'
            className='w-full p-3 rounded-lg shadow-md mb-4 border placeholder-gray-500' 
            placeholder='add a new task and press enter'
            onKeyDown={addNewTodo}
          ></input>
        </div>

        <div className='w-full md:w-1/2 bg-yellow-300 shadow-lg rounded-lg p-6'>
          {todoList.length===0?(
            <p className='text-center text-gray-500'>
              no tasks added yet. Add New :)
            </p>
          ):(
            todoList.map((todo, index)=>(
            <div key={index} className='flex justify-between items-center mb-3 p-2 rounded-lg bg-yellow-400 shadow-sm'>
              <h5 className='text-lg font-semibold'>{todo}</h5>))
              <button className='border border-red-700 rounded-lg bg-red-700 text-white'
              onClick={()=> removeTodo(index)}>
                Delete
              </button>
            </div>
            ))
        )}

      

        </div>


    </div>
  )
}

export default Todo