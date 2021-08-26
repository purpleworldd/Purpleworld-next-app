import React from "react";
import Head from "next/head";
import GalItem from "../../components/gal-item";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

function galleryitems(index) {
  return (
    <GalItem
      imgAdd_d={
        "/assets/livingRoom_d/lr" +
        (index < 9 ? "0" : "") +
        (index + 1) +
        ".jpg"
      }
    />
  );
}

function Drawingroom() {
  return (
    <div className="container py-5">
      <Head>
        <title>Gallery | PurpleWorld</title>
      </Head>
      <div className="row" id="drawingroom">
        <div className="text-center">
          <h1 className="pt-5 rem-2">Living Room</h1>
          <p className="cursive rem-1">
            The living room should be welcoming, well designed, comfortable and
            stylish enough to reflect your personality. All these come from
            furniture, lighting, curtains, wall decoration, etc. The interior
            designers of Purple World are here to inspire and impress you. Have
            a look!
          </p>
          <div className="row text-center">
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">
                  {[...Array(31)].map((item, index) => galleryitems(index))}
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawingroom;
