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
        "/assets/bedroom_d/bd" + (index < 9 ? "0" : "") + (index + 1) + ".jpg"
      }
    />
  );
}

function Bedroom() {
  return (
    <div className="container py-5">
      <Head>
        <title>Gallery | PurpleWorld</title>
      </Head>
      <div className="row" id="bedroom">
        <div className="text-center">
          <h1 className="pt-5">Bedroom</h1>
          <p className="cursive">
            Wrap your tired eyes around this massive gallery of refreshing
            modern bedroom ideas and gorgeous bedroom accessories that are sure
            to wake you up. From ultra sleek minimalist style bedrooms to warm
            modern rustic decor schemes, and styles with a cacophony of
            colourful options, there is something here to suit everyone.
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

export default Bedroom;
