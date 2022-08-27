import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import { useState , useEffect } from 'react';
import Drawer from './Components/Drawer/Drawer'

function App() {
  const [drawer , setDrawer] = useState('opened');
  const [context , setContext] = useState('add');
  const handleClick = (state , context)=> {
    setDrawer(state)
    setContext(context)
  }
  useEffect( () =>{
    drawer === 'opened' ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
   
  })

  
  
  return (

    <div className='App'>
      <Drawer context={context} state={drawer} handleClick={handleClick}/>
      <Navbar context={context} state={drawer} handleClick={handleClick} />
      <Gallery onclick={()=>{
        handleClick('closed' , '')
      }} context={context} />
    </div>
  );
}

export default App;
