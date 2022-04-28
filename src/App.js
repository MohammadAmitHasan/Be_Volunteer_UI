import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Pages/Common/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
