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
      <StarshipList />
      <Routes>
        <Route path='starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;
