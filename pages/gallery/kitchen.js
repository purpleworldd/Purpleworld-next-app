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
        "/assets/kitchen_d/kt" + (index < 9 ? "0" : "") + (index + 1) + ".jpg"
      }
    />
  );
}

function Kitchen() {
  return (
    <div className="container py-5">
      <Head>
        <title>Gallery | PurpleWorld</title>
      </Head>
      <div className="row" id="kitchen">
        <div className="text-center">
          <h1 className="pt-5">Kitchen</h1>
          <p className="cursive">
            If your kitchen is indeed the heart of your home - or linked with
            your dining space - then you’ll want to fill it with the kind of
            luxury you’d expect at your very favourite restaurant. Our portfolio
            of inspirational kitchen designs are steeped with luxury for high
            end homes, or even suited for compact proportions alike.
          </p>
          <div className="row text-center">
            <SimpleReactLightbox>
              <SRLWrapper options={options}>
                <div className="row">
                  {[...Array(48)].map((item, index) => galleryitems(index))}
                </div>
              </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
