import React from "react";
import Banner from "./banner";
import TopSales from "../components/top-sales";
import "../index.css";

const Home = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          <TopSales />

          <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
