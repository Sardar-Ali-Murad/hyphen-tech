import React from "react";

const Hero = () => {
  return (
    <div>
      <header class="container">
        <div class="row py-5">
          <div class="col-lg-6">
            <h1 class="main-heading">
              Sarbanes Oxley (SOX) Implementation Specialists
            </h1>
            <h4 class="fs-4 my-4">
              Big 4 Expertise at a Fraction of the Cost.
            </h4>
            <p class="text-secondary fs-5">
              SOX compliance is coming to the UK. Trust our experts, with global
              experience, to guide your company to full compliance efficiently
              and effectively.
            </p>
            <button
              class="btn btn-primary btn-shadow px-4 py-2 mt-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Schedule a Consultation
            </button>
          </div>
          <div class="col-lg-6">
            <div class="text-center">
              <img src="assets/images/header-img.png" class="img-fluid" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
