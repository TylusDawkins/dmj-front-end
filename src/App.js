
import Main from './pages/Main'
import DesignBoard from './pages/design_board/DesignBoard';
import TestBoard from './pages/design_board/TestBoard';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';


function App() {



  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='design' element={<DesignBoard/>}/>
        <Route path='testboard' element={<TestBoard/>}/>
      </Routes>
    </div>
  );
}

export default App;
