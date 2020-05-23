import React from "react";
import Banner from "./banner";
import TopSales from "../components/top-sales";
import CatalogPage from "./catalog-page";
import "../index.css";

const Home = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <TopSales />
          <CatalogPage />
        </div>
      </div>
    </main>
  );
};

export default Home;
