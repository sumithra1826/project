"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])
  const submitHandler= (e) =>{
 e.preventDefault()
 setMainTask([...MainTask,{title,desc}])
 settitle("")
 setdesc("")
  }
  function deleteHandler(i) {
    let copyTask = [...MainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)

  }
  let renderTask=<h1>No Task available</h1>

if(MainTask.length>0){
  renderTask=MainTask.map((t,i)=>{
      return(
        
          <li key={i} className='flex justify-between items-center'>
        <div className='flex justify-between mb-10 w-1/2'>
          <h4 className='b-5 font-semibold'>{t.title}</h4>
          <h4 className='b-5 font-medium'>{t.desc}</h4>
        </div>
        <button
        onClick={()=>{
          deleteHandler(i)}
        }
         className='bg-red-400 rounded size-16 font-bold mb-5'>Delete</button>
        </li>
      
      )
  })
}
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-extrabold text-center'>To-Do-List</h1>
    <form onSubmit={submitHandler} className='bg-black'>
      <input type='text' className='text-3xl p-5 border-spacing-5 border-zinc-800 border-2 m-4'
      placeholder='Enter your task here'
      value={title}
      onChange={(e)=>{
       settitle(e.target.value)
      }}
      />
    <input type='text' className='text-3xl p-5 border-spacing-5 border-zinc-800 border-2 m-4'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />

      <button className='bg-lime-400 rounded text-black py-4 px-5 m-5 text-2xl font-bold'>Add</button>
    </form>
    <hr />
    <div className='p-8 bg-black text-white'>
      {renderTask}
    </div>
    </>
  )
}

export default page

