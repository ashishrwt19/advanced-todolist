import { useState } from 'react';
import './App.css';
import CreateTask from './components/CreateTask';
import ListTask from './components/ListTask';
import SideBar from './components/SideBar';

function App() {
  const [showCreate, setShowCreate] = useState(true)
  const handleShowCreate = (type) => {
    setShowCreate(!showCreate)
  }
  return (
    <div className="App">
      <div className='grid grid-cols-7'>
        <div className='bg-slate-950 h-full'>
          <SideBar></SideBar>
        </div>
        <div className={showCreate ? 'col-span-5 bg-slate-950' : 'col-span-6 bg-slate-950'}>
          <ListTask></ListTask>
        </div>
        {showCreate &&
          <div className='col-span-1'>
            <CreateTask />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
