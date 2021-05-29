import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import NewsBanner from "./Components/NewsBanner/NewsBanner";
import Service from "./Components/Service/Service";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Showcase />
      <NewsBanner />
      <Service />
    </div>
  );
}

export default Home;
