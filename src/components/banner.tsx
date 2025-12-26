"use client";

import React from "react";

export default function Banner() {
  return (
    <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" />
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" />
      </div>

      {/* Slides */}
      <div className="carousel-inner" style={{ height: "350px" }}>
        <div className="carousel-item active">
          <img src="/images/slide1.webp" className="d-block w-100" alt="Slide 1" />
        </div>

        <div className="carousel-item">
          <img src="/images/slide2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>

        <div className="carousel-item">
          <img src="/images/slide3.webp" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
}
