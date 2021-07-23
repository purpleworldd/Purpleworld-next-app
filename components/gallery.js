import React from "react";
import GalleryCard from "./gallery-card";
function Gallery() {
  return (
    <section id="gallery" className="bg-white container">
      <h1 className="text-center fw-bold text-dark p-3 mt-5 sec-head">
        Gallery
      </h1>
      <div className="row">
        <GalleryCard
          cardImage="/assets/img/bed2.jpg"
          name="Bedroom"
          linkad="/image/bedroom"
        />
        <GalleryCard
          cardImage="/assets/img/sofa.jpg"
          name="Living Room"
          linkad="/image/drawingroom"
        />
        <GalleryCard
          cardImage="/assets/img/kitchen.jpg"
          name="Kitchen"
          linkad="/image/kitchen"
        />
      </div>
    </section>
  );
}

export default Gallery;
