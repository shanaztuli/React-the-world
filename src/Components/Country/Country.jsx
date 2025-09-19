import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  //   console.log(country.region.region);
  const [visited, setVisited] = useState(false);
  //   console.log(handleVisitedCountries);

  const handleVisited = () => {
    //css class conditional
    //1.---->
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    //2.--->
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    // <div
    //   className={`country border-lg text-centre ${
    //     visited ? "country-visited" : "country-not-visited"
    //   }`}
    // >
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name : {country.name.common}</h3>
      <p>Population : {country.population.population}</p>
      {/* <p>Currencies Name :{country.currencies.currencies} </p> */}
      <p>Capital : </p>
      <p>Region :{country.region.region} </p>
      <p>
        Area :{country.area.area}
        {/* /conditional text */}
        {country.area.area > 30000 ? " Big Country" : " Small Country"}{" "}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/**
 * 1. inline css
 */
