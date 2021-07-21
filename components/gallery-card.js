import React from "react";
import Link from "next/link";
function GalleryCard(props) {
  return (
    <div className="card-out col-md-4 col-sm-6 my-3" data-aos="fade-up">
      <div className="card shadow">
        <img
          src={props.cardImage}
          width="100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h3 className="pb-3">{props.name}</h3>
          <Link href={props.linkad} className="btn btn-outline-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
