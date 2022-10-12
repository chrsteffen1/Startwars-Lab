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
      <Link>
        <div className="ship-div">
          {starships.map(starship =>
            <div key={starship.name}>
              {starship.name}
            </div>
          )}
        </div>
      </Link>
    </>
  );
}

export default StarshipList;