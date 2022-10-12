import { useState, useEffect } from "react";
import { getStarshipList } from "../../services/api-calls";
import { Link } from 'react-router-dom';

const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarships(starshipData.results)

    }
    fetchStarshipList()
  }, [])  

  return ( 
    <>
      <h3>Starship List</h3>
      <div className="ship-div">
        {starships.map(starship =>
        <Link key={starship.name} state={{ starship }} to='/starship'>
          <div >
            {starship.name}
          </div>
        </Link>
        )}
      </div>
    </>
  );
}

export default StarshipList;