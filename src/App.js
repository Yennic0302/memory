import { useState } from 'react';
import './App.css';
import BgMemory from './components/BgMemory';
import Memory from './components/Memory';
import MemoryNavBar from './components/NavVar';

function App() {

  const [seeHistory,setSeeHistory] = useState(false)
  const [seeBtnHistory,setSeeBtnHistory] = useState(true)
  

  return (
    <div className="App">
      <MemoryNavBar 
      setSeeHistory={setSeeHistory}
      seeHistory={seeHistory}
      seeBtnHistory={seeBtnHistory}/>
      <div className='memory-container'>
      <BgMemory />
      <Memory 
      seeHistory={seeHistory}
      setSeeHistory={setSeeHistory}
      setSeeBtnHistory={setSeeBtnHistory}/>
      </div>
    </div>
  );
}

export default App;
