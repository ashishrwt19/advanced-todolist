import React, { useState } from 'react'

export default function TaskType({ data }) {
    const [show, setShow] = useState(true)
    return (
        <div>
            <div className='bg-gray-900 px-10 py-3 flex justify-between cursor-pointer my-2' onClick={() => setShow(!show)}>
                <div className='flex gap-3'>
                    <span>{data.status}</span> <span className='text-gray-500'> {data.tasks.length} Tasks</span>
                </div>
                <button className='bg-purple-700 w-[24px] h-[24px] text-purple-950 font-bold'>
                    <span class="material-symbols-sharp flex items-center">add</span>
                </button>
            </div>
            {
                show &&
                <div>
                    {
                        data.tasks.map((e, i) => {
                            return (
                                <div key={i} className='px-10 py-3 border-b flex justify-between items-center'>
                                    <div className='flex gap-3'>
                                        <span class="material-symbols-sharp flex items-center">more_horiz</span> {e.name}
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <div className='flex gap-2'>{
                                            e.tags.map((el, idx) => {
                                                return (
                                                    <div className='bg-gray-800 px-3 py-1 rounded-lg' key={el + idx}>
                                                        {el}
                                                    </div>
                                                )
                                            })
                                        }</div>
                                        <div>{e.due}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
