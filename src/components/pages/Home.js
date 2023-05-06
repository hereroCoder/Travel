import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Africa from "../img/Africa.jpeg";
import Caribbean from "../img/Caribbean.jpeg";
import Cuba from "../img/Cuba.jpeg";
import Prague from "../img/Prague.jpeg";
import ChiangMai from "../img/ChiangMai.jpeg"
import "./styles/Home.css";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    carousel.addEventListener("click", handleItemClick);

    return () => {
      carousel.removeEventListener("click", handleItemClick);
    };
  }, []);

  return (
    <>
      <header>
        <div className="hero">
          <h1 className="hero-title">Travel. Enjoy. Life.</h1>
        </div>
      </header>
      <main>
        <h3>Embark on a Journey, Explore the Extraordinary. Let our Travel Blog be Your Guide to Unforgettable Adventures and Inspiring Destinations.</h3>
        <Carousel>
          <div className="carousel">
            <img src={Africa} alt="Afirca" />
            <p className="legend">Africa description</p>
          </div>
          <div className="carousel">
            <img src={Caribbean} alt="Caribbean" />
            <p className="legend">Caribbean description</p>
          </div>
          <div className="carousel">
            <img src={Cuba} alt="Cuba" />
            <p className="legend">Cuba description</p>
          </div>
          <div className="carousel">
            <img src={Prague} alt="Prague" />
            <p className="legend">Prague description</p>
          </div>
          <div className="carousel">
            <img src={ChiangMai} alt="Chaing Mai" />
            <p className="legend">Thailand description</p>
          </div>
          {/* Add more image slides here */}
        </Carousel>
      </main>
    </>
  );
}
