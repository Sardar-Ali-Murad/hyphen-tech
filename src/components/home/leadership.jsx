import { Hidden } from "@mui/material";
import React from "react";

const Leadership = () => {
  return (
    <div>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="border-left-theme ps-3 fw-bold">Our Leadership</h4>
              <h1 className="main-heading my-4">
                Elite Leadership, Industry Veterans
              </h1>
            </div>
          </div>
          <div className="col-12">
            <div className="row gap-143">
              <div className="col-lg-4">
                <div className="border leader-card">
                  <img
                    src="assets/images/leader-1.png"
                    className="img-fluid w-100"
                    alt="Faheem Piracha"
                  />
                  <div className="p-3 font-inter">
                    <h3 className="fw-bold">Faheem Piracha</h3>
                    <p className="text-secondary leader-title">
                      CEO & Principal Consultant
                    </p>
                    <p className="mt-4 text-secondary mb-1">
                      Faheem leads Hyphen Consulting with over 25 years of
                      experience in risk management and governance across
                      multiple regions. His expertise includes SOX 404
                      implementation, internal audit transformation, and
                      governance for large corporations.
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/faheempiracha/"
                        target="__blank"
                        className="read-more"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border leader-card">
                  <img
                    src="assets/images/leader-2.png"
                    className="img-fluid w-100"
                    alt="Leah Owens"
                  />
                  <div className="p-3 font-inter">
                    <h3 className="fw-bold">Leah Owens</h3>
                    <p className="text-secondary leader-title">
                      Principal Consultant Compliance
                    </p>
                    <p className="mt-4 text-secondary mb-1">
                      Leah is an accomplished expert in Anti-Money Laundering
                      and compliance, with extensive experience in developing
                      and managing AML frameworks for fintech companies and
                      ensuring regulatory compliance across various sectors.
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/leahowens/"
                        target="__blank"
                        className="read-more"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border leader-card">
                  <img
                    src="assets/images/leader-3.png" // Make sure to set the correct image path
                    className="img-fluid w-100"
                    alt="Omer Ahmed"
                  />
                  <div className="p-3 font-inter">
                    <h3 className="fw-bold">Omer Ahmed</h3>
                    <p className="text-secondary leader-title">
                      Principal Consultant Technology
                    </p>
                    <p className="mt-4 text-secondary mb-1">
                      Omer is a seasoned technology consultant with expertise in
                      implementing innovative tech solutions for businesses,
                      driving transformation and efficiency across various
                      sectors.
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/omerahmed/"
                        target="__blank"
                        className="read-more"
                      >
                        Read more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;

