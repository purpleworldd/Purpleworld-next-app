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
          cardImage="/assets/bedroom_d/bd15.jpg"
          name="Bedroom"
          linkad="/gallery/bedroom"
        />
        <GalleryCard
          cardImage="/assets/livingRoom_d/lr04.jpg"
          name="Living Room"
          linkad="/gallery/drawingroom"
        />
        <GalleryCard
          cardImage="/assets/img/kitchen.jpg"
          name="Kitchen"
          linkad="/gallery/kitchen"
        />
      </div>
    </section>
  );
}

export default Gallery;
