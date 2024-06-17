import React, { useState } from "react";

import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import CoffeeDisplay from "../../components/CoffeeDisplay/CoffeeDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <CoffeeDisplay category={category} />
    </div>
  );
};

export default Home;
