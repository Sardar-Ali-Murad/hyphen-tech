import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="assets/images/Logo.png" style={{ width: "180px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="who_we_are.html">
                  Who We Are
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="SOX_Implementation.html">
                  SOX Implementation
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="industries.html">
                  Industries
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <a href="contact-us.html">
                <button class="btn btn-primary">Contact Us</button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
