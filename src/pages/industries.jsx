import React from "react";
import Hero from "../components/industries/hero";
import Industry from "../components/industries/industry";
import Contact from "../components/common/contact";
import NewsLetter from "../components/common/newsletter";
import Header from "../components/common/header";
import ConsultationDialog from "../components/common/consultation-dialog";

const Industries = () => {
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
      <Hero />
      <Industry />
      <Contact />
      <NewsLetter newsletter={true} setOpen={setOpen} />
    </div>
  );
};

export default Industries;
