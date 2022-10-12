import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";
import { Link } from "react-router-dom";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getDetails(location.state.starship.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      {starshipDetails.name}
      <br/>
      {starshipDetails.model}
      <br />
      <Link to="/">
      Return
      </Link>

    </>
  );
}

export default StarshipDetails;