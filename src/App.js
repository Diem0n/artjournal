import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import { useState } from 'react';
import Drawer from './Components/Drawer/Drawer'
function App() {
  const [drawer , setDrawer] = useState('closed');
  const [context , setContext] = useState('')

  const handleClick = (state , context)=> {
    setDrawer(state);
   setContext(context)
  }
  return (

    <div className="App">
      <Drawer context={context} state={drawer} />
      <Navbar state={drawer} handleClick={handleClick} />
      <Gallery />
    </div>
  );
}

export default App;
