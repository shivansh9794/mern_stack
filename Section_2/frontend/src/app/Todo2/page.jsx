'use client'
import React ,{useState} from 'react'
import Todo from '../todo/page'

const Todo2 = () => {

  const [todoList , setTodoList]=useState([])

  const addTodoList=(s)=>{
    if(s.code==='Enter' && s.target.value.trim()!==''){
      setTodoList([...todoList,s.target.value.trim()])
      s.target.value=''
    }
  }

  
  
  const removeTodo=(index)=>{
    const temp=todoList;  
    temp.splice(index,1);  
    setTodoList([...temp])
  }

    
  return (

    <div className='flex flex-col  items-center'>

        <h1 className='font-bold text-4xl text-red-700 my-10'>
          My Todo List App</h1>

        <div className='w-full flex flex-col items-center mt-10'>

          <input type="text"
            className='border border-box w-1/2 border-gray-300 rounded-lg h-16 p-5 '
            placeholder='Enter a new task here :'
            onKeyDown={addTodoList}
          ></input>

        </div>

        <div className='w-full  mt-10 flex flex-col justify-center items-center'>

          {todoList.length===0?(
            <div className='bg-yellow-300 border rounded-lg md:w-1/2 w-1/2 p-6'>
              <p className='text-center text-gray-500'>
              no tasks added yet. Add New :)
              </p>
            </div>
              
            ):(
            
            
              todoList.map((todo, index)=>(
                <div className='bg-yellow-300 border rounded-lg md:w-1/2 w-1/2 p-6'>
                  <p>
                    <h1>{todo}</h1>
                    <button onClick={()=> removeTodo(index)}>
                      delete
                    </button>
                  </p>
                </div>
                ))
            )
          }
        </div>

    </div>
  )
}

export default Todo2