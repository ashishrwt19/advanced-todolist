import React from 'react'

export default function CreateTask() {
  return (
    <div className='h-[100vh] p-4 w-full fixed border-s bg-slate-950 text-gray-300'>
      <div className='text-lg '>Add Task Type   </div>
      <input type="text" className='rounded-sm w-full text-sm bg-slate-700 py-2 px-2 mt-3' />
      <div className='mt-8'>
        <div className='text-slate-500'>GENERAL</div>
        <div className='mt-2 flex gap-2 '>

        </div>
      </div>
    </div>
  )
}
