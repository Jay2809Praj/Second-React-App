import React from "react";
import Common from "./Common";
import web from "../src/images/3d.jpg"

const About = () => {
  return (
    <>
      <Common
        name="Wellcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
      />
    </>
  );
};

export default About;
