import React from 'react'

export default function SideBar() {
    return (
        <div className='h-[100vh] overflow-y-auto p-4 fixed border-r bg-slate-950 text-gray-300'>
            <div className='text-lg '>Name</div>
            <div className='text-sm'>Project Manager</div>
            <div className='flex mt-5 gap-2'>
                <input type="text" className='rounded-sm w-full text-sm bg-slate-700 py-2 px-2' />
                <button className='rounded-sm px-3 bg-indigo-800'>S</button>
            </div>

            <div className='mt-8'>
                <div className='text-slate-500'>GENERAL</div>
                <div className='mt-2 flex gap-2 '>
                    <span class="material-symbols-sharp flex items-center">mail</span>
                    <span>Inbox</span>
                </div>
                <div className='mt-2 flex gap-2' >
                    <span class="material-symbols-sharp flex items-center">bug_report</span>
                    My Issues
                </div>
                <div className='mt-2 flex gap-2'>
                    <span class="material-symbols-sharp flex items-center">visibility</span>
                    View
                </div>
                <div className='mt-2 flex gap-2'>
                    <span class="material-symbols-sharp flex items-center">delete</span>
                    Trash
                </div>
            </div>
        </div>
    )
}
