import React from "react";
import Hero from "../components/home/hero";
import SOX from "../components/home/sox";
import Testimonial from "../components/home/testimonial";
import Approach from "../components/home/approach";
import Leadership from "../components/home/leadership";
import Newsletter from "../components/common/newsletter";
import Contact from "../components/common/contact";
import Checklist from "../components/sox-implementation/checklist";
import Blogs from "../components/common/blogs";
import Header from "../components/common/header";
import ConsultationDialog from "../components/common/consultation-dialog";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {open && (
        <div className="model-parent" onClick={() => setOpen(false)}>
          <div className="model-wrap">
            <ConsultationDialog setOpen={setOpen} />
          </div>
        </div>
      )}
      <Header />
      <Hero setOpen={setOpen} />
      <Checklist />
      <SOX setOpen={setOpen} />
      <Testimonial />
      <Approach />
      <Leadership />
      <Blogs />
      <Newsletter newsletter={true} setOpen={setOpen} />
      <Contact />
    </div>
  );
};

export default Home;
