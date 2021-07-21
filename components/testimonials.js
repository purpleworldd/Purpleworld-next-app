import React, { useState, useEffect } from "react";

const testimonials01 = "/assets/bedroom_d/bd01.jpg";
const testimonials02 = "/assets/bedroom_d/bd02.jpg";
const testimonials03 = "/assets/bedroom_d/bd03.jpg";
const testimonials04 = "/assets/bedroom_d/bd04.jpg";
const testimonials05 = "/assets/bedroom_d/bd05.jpg";
const testimonials06 = "/assets/bedroom_d/bd06.jpg";
const testimonials07 = "/assets/bedroom_d/bd07.jpg";
const testimonials08 = "/assets/bedroom_d/bd08.jpg";
const testimonials09 = "/assets/bedroom_d/bd09.jpg";
const testimonials10 = "/assets/bedroom_d/bd10.jpg";

function Testimonials() {
  const [fade, setFade] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const pearray = [
    testimonials01,
    testimonials02,
    testimonials03,
    testimonials04,
    testimonials05,
    testimonials06,
    testimonials07,
    testimonials08,
    testimonials09,
    testimonials10,
  ];
  const headarray = [
    "Person 1",
    "Person 2",
    "Person 3",
    "Person 4",
    "Person 5",
    "Person 6",
    "Person 7",
    "Person 8",
    "Person 9",
    "Person 10",
  ];
  const descarray = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Adipiscing elit ut aliquam purus sit amet. Euismod in pellentesque massa placerat duis ultricies. Fermentum odio eu feugiat pretium nibh ipsum consequat. Morbi tristique senectus et netus. Mollis aliquam ut porttitor leo a. Hac habitasse platea dictumst vestibulum rhoncus est. Purus in mollis nunc sed id. Erat nam at lectus urna duis. Diam in arcu cursus euismod quis viverra.",
    "Netus et malesuada fames ac. Enim ut sem viverra aliquet. Iaculis urna id volutpat lacus laoreet. Sagittis purus sit amet volutpat consequat mauris nunc. Sociis natoque penatibus et magnis dis parturient montes nascetur. Urna condimentum mattis pellentesque id nibh. Vulputate odio ut enim blandit. Nunc congue nisi vitae suscipit tellus. Lectus vestibulum mattis ullamcorper velit sed. Lobortis elementum nibh tellus molestie nunc non blandit. ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];
  useEffect(() => {
    let timer = setInterval(() => {
      setCurrentImage((prevCurrentImage) =>
        prevCurrentImage === 9 ? 0 : prevCurrentImage + 1
      );
      if (fade) {
        document.getElementById("test").classList.add("toggleIn");
        document.getElementById("test").classList.remove("toggleOut");
      } else {
        document.getElementById("test").classList.add("toggleOut");
        document.getElementById("test").classList.remove("toggleIn");
      }
      setFade(!fade);
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [currentImage, fade]);
  return (
    <section>
      <div className="testimonial">
        <h1 className="text-center p-3 mt-5 sec-head">Testimonials</h1>
        <div className="container" data-aos="fade-up">
          <div className="card">
            <div className="row justify-content-center">
              <div className="carousel-control-prev">
                <i
                  className="fa fa-angle-left fa-4x"
                  onClick={() => {
                    currentImage > 0
                      ? setCurrentImage(currentImage - 1)
                      : setCurrentImage(9);
                    if (fade) {
                      document.getElementById("test").classList.add("toggleIn");
                      document
                        .getElementById("test")
                        .classList.remove("toggleOut");
                    } else {
                      document
                        .getElementById("test")
                        .classList.add("toggleOut");
                      document
                        .getElementById("test")
                        .classList.remove("toggleIn");
                    }
                    setFade(!fade);
                  }}
                ></i>
              </div>
              <div className="col-md-8 col-12 text-center align-self-center">
                <div className="pt-3" id="test">
                  <img
                    src={pearray[currentImage]}
                    alt="current"
                    className="align-self-center testimonial-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{headarray[currentImage]}</h5>
                    <p className="card-text">{descarray[currentImage]}</p>
                  </div>
                </div>
                <div className="carousel-control-next">
                  <i
                    className="fa fa-angle-right fa-4x"
                    onClick={() => {
                      currentImage < 9
                        ? setCurrentImage(currentImage + 1)
                        : setCurrentImage(0);
                      if (fade) {
                        document
                          .getElementById("test")
                          .classList.add("toggleIn");
                        document
                          .getElementById("test")
                          .classList.remove("toggleOut");
                      } else {
                        document
                          .getElementById("test")
                          .classList.add("toggleOut");
                        document
                          .getElementById("test")
                          .classList.remove("toggleIn");
                      }
                      setFade(!fade);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
