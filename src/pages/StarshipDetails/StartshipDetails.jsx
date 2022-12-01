import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/api-calls";
import { Link } from "react-router-dom";
import {getPilots } from "../../services/api-calls";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const [pilots, setPilots] = useState({})
  
  const location = useLocation()

  useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getDetails(location.state.starship.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
  }, [location.state.starship.url])

  useEffect(() =>{
    const fetchPilotData = async() => {
      const pilotData = await getPilots(location.state.starship.pilots)
      setPilots(pilotData)
    }
    fetchPilotData()
  },[location.state.starship.pilots])

  return ( 
    <>
    <div className="details">
    <div className="cardDetails">
      <div className="info">
        {starshipDetails.name}
      </div>
      <div className="info">
        {starshipDetails.model}
      </div>
      {pilots.length ?
      <>
      <div className="info">
        {pilots.map(pilot =>
          <h4 className="info">{pilot.name}</h4>
          )}
      </div>
      </>
      :
      <>
      <p className="info"> no pilots found</p>
      </>
      }
    </div>
    </div>
      <div className="return">
        <Link to="/">
        Return
        </Link>
      </div>
    </>
  );
}

export default StarshipDetails;