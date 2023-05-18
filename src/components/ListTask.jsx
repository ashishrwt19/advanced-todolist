
import TaskType from './TaskType'
const parentData = [
    {
        status: 'In Progress',
        tasks: [
            { name: 'Task 1', due: '19th Nov', tags: ['JS', 'HTML'] },
            { name: 'Task 2', due: '20th Nov', tags: ['Vue', 'Nuxt'] },
            { name: 'Task 3', due: '21st Nov', tags: ['React', 'Next', 'Material UI'] },
            { name: 'Task 3', due: '21st Nov', tags: ['React', 'Next', 'Material UI'] },
        ]
    },
    {
        status: 'Wireframes',
        tasks: [
            { name: 'Task 1', due: '19th Nov', tags: ['JS', 'HTML'] },
            { name: 'Task 2', due: '20th Nov', tags: ['Vue', 'Nuxt'] },
            { name: 'Task 3', due: '21st Nov', tags: ['React', 'Next', 'Material UI'] },
        ]
    }, {
        status: 'Research and App Flow',
        tasks: [
            { name: 'Task 1', due: '19th Nov', tags: ['JS', 'HTML'] },
            { name: 'Task 2', due: '20th Nov', tags: ['Vue', 'Nuxt'] },
            { name: 'Task 3', due: '21st Nov', tags: ['React', 'Next', 'Material UI'] },
        ]
    },
]
export default function ListTask() {
    return (
        <div className='py-6  h-[100vh] overflow-y-auto text-gray-300 scrollbar'>
            <div className='text-center py-2 px-3 text-sm text-gray-300 bg-gray-900'>{(new Date()).toDateString()}</div>
            <div className='mt-3 flex gap-3 p-5'>
                <div className='px-3 py-1 rounded-sm bg-slate-900 text-sm'>Today Progress <span>96%</span></div>
                <div className='px-3 py-1 rounded-sm bg-purple-950 bg-opacity-40 text-purple-500'> + Filter </div>
            </div>
            {
                parentData.map((e, i) => {
                    return (
                        <TaskType key={i} data={e} />
                    )
                })
            }
        </div>
    )
}
