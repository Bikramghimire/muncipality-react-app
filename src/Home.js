import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import NewsBanner from "./Components/NewsBanner/NewsBanner";
import Service from "./Components/Service/Service";
import { useState, useEffect } from "react";
import axios from "axios";
import SimpleMap from "./Components/SimpleMaps/SimpleMap";
const options = {
  method: "GET",
  url: "https://covid-19-tracking.p.rapidapi.com/v1/Nepal",
  headers: {
    "x-rapidapi-key": "2e3ba36e00msh70efad010843a66p1766d6jsn8f2905a0c72d",
    "x-rapidapi-host": "covid-19-tracking.p.rapidapi.com",
  },
};

function Home() {
  const [covidData, setCovidData] = useState(null);
  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        setCovidData(response?.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => fetchData(), []);
  return (
    <div>
      <Navbar />
      <Banner covidData={covidData} />
      <Showcase />
      <NewsBanner />
      <Service />
      <SimpleMap />
    </div>
  );
}

export default Home;
