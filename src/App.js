import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StartshipDetails';


function App() {
  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <div className='id-card'>
        <Routes>
          <Route path='/' element={<StarshipList />} />
          <Route path='/starship' element={<StarshipDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
