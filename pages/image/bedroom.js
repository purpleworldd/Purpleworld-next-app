import React from "react";
import GalItem from "../../components/gal-item";
const bd01 = "/assets/bedroom/bd01.jpg";
const bd02 = "/assets/bedroom/bd02.jpg";
const bd03 = "/assets/bedroom/bd03.jpg";
const bd04 = "/assets/bedroom/bd04.jpg";
const bd05 = "/assets/bedroom/bd05.jpg";
const bd06 = "/assets/bedroom/bd06.jpg";
const bd07 = "/assets/bedroom/bd07.jpg";
const bd08 = "/assets/bedroom/bd08.jpg";
const bd09 = "/assets/bedroom/bd09.jpg";
const bd10 = "/assets/bedroom/bd10.jpg";
const bd11 = "/assets/bedroom/bd11.jpg";
const bd12 = "/assets/bedroom/bd12.jpg";
const bd13 = "/assets/bedroom/bd13.jpg";
const bd14 = "/assets/bedroom/bd14.jpg";
const bd15 = "/assets/bedroom/bd15.jpg";
const bd16 = "/assets/bedroom/bd16.jpg";
const bd17 = "/assets/bedroom/bd17.jpg";
const bd18 = "/assets/bedroom/bd18.jpg";
const bd19 = "/assets/bedroom/bd19.jpg";
const bd20 = "/assets/bedroom/bd20.jpg";
const bd21 = "/assets/bedroom/bd21.jpg";
const bd22 = "/assets/bedroom/bd22.jpg";
const bd23 = "/assets/bedroom/bd23.jpg";
const bd24 = "/assets/bedroom/bd24.jpg";
const bd25 = "/assets/bedroom/bd25.jpg";
const bd26 = "/assets/bedroom/bd26.jpg";
const bd27 = "/assets/bedroom/bd27.jpg";
const bd28 = "/assets/bedroom/bd28.jpg";
const bd29 = "/assets/bedroom/bd29.jpg";
const bd30 = "/assets/bedroom/bd30.jpg";
const bd31 = "/assets/bedroom/bd31.jpg";

const bd01_d = "/assets/bedroom_d/bd01.jpg";
const bd02_d = "/assets/bedroom_d/bd02.jpg";
const bd03_d = "/assets/bedroom_d/bd03.jpg";
const bd04_d = "/assets/bedroom_d/bd04.jpg";
const bd05_d = "/assets/bedroom_d/bd05.jpg";
const bd06_d = "/assets/bedroom_d/bd06.jpg";
const bd07_d = "/assets/bedroom_d/bd07.jpg";
const bd08_d = "/assets/bedroom_d/bd08.jpg";
const bd09_d = "/assets/bedroom_d/bd09.jpg";
const bd10_d = "/assets/bedroom_d/bd10.jpg";
const bd11_d = "/assets/bedroom_d/bd11.jpg";
const bd12_d = "/assets/bedroom_d/bd12.jpg";
const bd13_d = "/assets/bedroom_d/bd13.jpg";
const bd14_d = "/assets/bedroom_d/bd14.jpg";
const bd15_d = "/assets/bedroom_d/bd15.jpg";
const bd16_d = "/assets/bedroom_d/bd16.jpg";
const bd17_d = "/assets/bedroom_d/bd17.jpg";
const bd18_d = "/assets/bedroom_d/bd18.jpg";
const bd19_d = "/assets/bedroom_d/bd19.jpg";
const bd20_d = "/assets/bedroom_d/bd20.jpg";
const bd21_d = "/assets/bedroom_d/bd21.jpg";
const bd22_d = "/assets/bedroom_d/bd22.jpg";
const bd23_d = "/assets/bedroom_d/bd23.jpg";
const bd24_d = "/assets/bedroom_d/bd24.jpg";
const bd25_d = "/assets/bedroom_d/bd25.jpg";
const bd26_d = "/assets/bedroom_d/bd26.jpg";
const bd27_d = "/assets/bedroom_d/bd27.jpg";
const bd28_d = "/assets/bedroom_d/bd28.jpg";
const bd29_d = "/assets/bedroom_d/bd29.jpg";
const bd30_d = "/assets/bedroom_d/bd30.jpg";
const bd31_d = "/assets/bedroom_d/bd31.jpg";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
  },
};

const bedroomArray = [
  "/assets/bedroom_d/bd01.jpg",
  "/assets/bedroom_d/bd02.jpg",
  "/assets/bedroom_d/bd03.jpg",
  "/assets/bedroom_d/bd04.jpg",
  "/assets/bedroom_d/bd05.jpg",
  "/assets/bedroom_d/bd06.jpg",
  "/assets/bedroom_d/bd07.jpg",
  "/assets/bedroom_d/bd08.jpg",
  "/assets/bedroom_d/bd09.jpg",
  "/assets/bedroom_d/bd10.jpg",
  "/assets/bedroom_d/bd11.jpg",
  "/assets/bedroom_d/bd12.jpg",
  "/assets/bedroom_d/bd13.jpg",
  "/assets/bedroom_d/bd14.jpg",
  "/assets/bedroom_d/bd15.jpg",
  "/assets/bedroom_d/bd16.jpg",
  "/assets/bedroom_d/bd17.jpg",
  "/assets/bedroom_d/bd18.jpg",
  "/assets/bedroom_d/bd19.jpg",
  "/assets/bedroom_d/bd20.jpg",
  "/assets/bedroom_d/bd21.jpg",
  "/assets/bedroom_d/bd22.jpg",
  "/assets/bedroom_d/bd23.jpg",
  "/assets/bedroom_d/bd24.jpg",
  "/assets/bedroom_d/bd25.jpg",
  "/assets/bedroom_d/bd26.jpg",
  "/assets/bedroom_d/bd27.jpg",
  "/assets/bedroom_d/bd28.jpg",
  "/assets/bedroom_d/bd29.jpg",
  "/assets/bedroom_d/bd30.jpg",
  "/assets/bedroom_d/bd31.jpg",
];
const galleryitems = () => {
  for (let i = 1; i <= 31; i++) {
    <GalItem imgAdd_d={`"/assets/bedroom_d/bd${i}.jpg"`} />;
  }
};

function Bedroom() {
  return (
    <div className="container">
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
                  <GalItem imgAdd={bd01} imgAdd_d={bd01_d} />
                  <GalItem imgAdd={bd02} imgAdd_d={bd02_d} />
                  <GalItem imgAdd={bd03} imgAdd_d={bd03_d} />
                  <GalItem imgAdd={bd04} imgAdd_d={bd04_d} />
                  <GalItem imgAdd={bd05} imgAdd_d={bd05_d} />
                  <GalItem imgAdd={bd06} imgAdd_d={bd06_d} />
                  <GalItem imgAdd={bd07} imgAdd_d={bd07_d} />
                  <GalItem imgAdd={bd08} imgAdd_d={bd08_d} />
                  <GalItem imgAdd={bd09} imgAdd_d={bd09_d} />
                  <GalItem imgAdd={bd10} imgAdd_d={bd10_d} />
                  <GalItem imgAdd={bd11} imgAdd_d={bd11_d} />
                  <GalItem imgAdd={bd12} imgAdd_d={bd12_d} />
                  <GalItem imgAdd={bd13} imgAdd_d={bd13_d} />
                  <GalItem imgAdd={bd14} imgAdd_d={bd14_d} />
                  <GalItem imgAdd={bd15} imgAdd_d={bd15_d} />
                  <GalItem imgAdd={bd16} imgAdd_d={bd16_d} />
                  <GalItem imgAdd={bd17} imgAdd_d={bd17_d} />
                  <GalItem imgAdd={bd18} imgAdd_d={bd18_d} />
                  <GalItem imgAdd={bd19} imgAdd_d={bd19_d} />
                  <GalItem imgAdd={bd20} imgAdd_d={bd20_d} />
                  <GalItem imgAdd={bd21} imgAdd_d={bd21_d} />
                  <GalItem imgAdd={bd22} imgAdd_d={bd22_d} />
                  <GalItem imgAdd={bd23} imgAdd_d={bd23_d} />
                  <GalItem imgAdd={bd24} imgAdd_d={bd24_d} />
                  <GalItem imgAdd={bd25} imgAdd_d={bd25_d} />
                  <GalItem imgAdd={bd26} imgAdd_d={bd26_d} />
                  <GalItem imgAdd={bd27} imgAdd_d={bd27_d} />
                  <GalItem imgAdd={bd28} imgAdd_d={bd28_d} />
                  <GalItem imgAdd={bd29} imgAdd_d={bd29_d} />
                  <GalItem imgAdd={bd30} imgAdd_d={bd30_d} />
                  <GalItem imgAdd={bd31} imgAdd_d={bd31_d} />
                  {/* {galleryitems()}
                  {bedroomArray.forEach((item) => (
                    <GalItem imgAdd={bd01} imgAdd_d={item} />
                  ))} */}
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
