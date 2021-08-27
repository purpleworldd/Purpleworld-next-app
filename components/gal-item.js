import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
function GalItem(props) {
  return (
    <div className="col-lg-3 col-md-4 col-6 my-2 px-2 thumb-post">
      <Link href={props.imgAdd_d}>
        <Image
          src={props.imgAdd_d}
          width="100"
          className="card-img-top thumb-img"
          alt="..."
          loading="lazy"
        />
      </Link>
    </div>
  );
}

export default GalItem;
