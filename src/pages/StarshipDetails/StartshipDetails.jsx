import { useState, useEffect } from "react";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})

  useEffect(() => {
      console.log('Use effect')
  }, [])

  return ( 
    <>
      <h3>Ship Detail</h3>
    </>
  );
}

export default StarshipDetails;