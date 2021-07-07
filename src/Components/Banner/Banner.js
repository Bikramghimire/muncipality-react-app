import React from "react";
import "../Banner/Banner.css";

function Banner({ covidData }) {
  console.log(covidData);
  return (
    <div className="banner text-black">
      {covidData ? (
        <marquee>
          <div className="covid">
            <p>{covidData["Last Update"]}</p>
            <p className="NewCases covidstyle">
              New Cases: <span>{covidData["New Cases_text"]}</span>
            </p>
            <p className="NewDeath covidstyle">
              New Death: {covidData["New Deaths_text"]}
            </p>
            <p className="TotalDeath covidstyle">
              Total Death: {covidData["Total Deaths_text"]}
            </p>
            <p className="TotalCases covidstyle">
              Total Cases: {covidData["Total Cases_text"]}
            </p>
            <p className="TotalRecovered covidstyle">
              Total Recovered: {covidData["Total Recovered_text"]}
            </p>
          </div>
        </marquee>
      ) : (
        "loading....."
      )}
    </div>
  );
}
export default Banner;
