import React from "react";

import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto m-3">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white  ">
                Feels the Fresh Buisnnes Perpective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit modi soluta suscipit nemo odio. Vitae quisquam nesciunt
                sed necessitatibus reiciendis?
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounded-pill px-4 py-2">
                  {" "}
                  Get Quote{" "}
                </button>
                <button className="btn btn-outline-light rounded-pill px-4 py-2">
                  Our Srevices
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
}
