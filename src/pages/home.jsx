import React from "react";
import Header from "../components/common/header";
import Hero from "../components/home/hero";
import SOX from "../components/home/sox";
import Testimonial from "../components/home/testimonial";
import Approach from "../components/home/approach";
import Leadership from "../components/home/leadership";
import Newsletter from "../components/home/newsletter";
import Contact from "../components/home/contact";
import Footer from "../components/common/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SOX />
      <Testimonial />
      <Approach />
      <Leadership />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
