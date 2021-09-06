import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
function GalleryCard(props) {
  return (
    <div className="card-out col-md-4 col-sm-6 my-3" data-aos="fade-up">
      <div className="card shadow">
        <Image
          src={props.cardImage}
          width="100"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h3 className="pb-3">{props.name}</h3>
          <span className="btn btn-outline-secondary">
            <Link href={props.linkad}>Learn More</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
