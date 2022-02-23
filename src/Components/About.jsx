import React from "react";

export default function About() {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col md-6">
              <img src="/assets/about1.jpg" alt="About" className="w-90 mt-6" />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About Us</h3>
              <h1 className="display6 mb-2">
                Who <b>Are</b> We{" "}
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Commodi, architecto soluta quis ullam amet facere non iure
                dolores minima quam veniam reprehenderit illum totam, optio
                recusandae. Facere possimus quibusdam, cumque veniam molestias
                aperiam. Fuga quasi corrupti, excepturi beatae necessitatibus
                cupiditate similique id quaerat blanditiis, tempore placeat vero
                ex ea non?
              </p>
              <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
              <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
