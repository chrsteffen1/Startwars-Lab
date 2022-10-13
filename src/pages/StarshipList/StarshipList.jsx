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
    <div className="body">
      <div className="ship-div">
        {starships.map(starship =>
        <Link key={starship.name} state={{ starship }} to='/starship' style={{textDecoration:'none'}}>
          <div className="card">
            {starship.name}
          </div>
        </Link>
        )}
      </div>
    </div>
  );
}

export default StarshipList;