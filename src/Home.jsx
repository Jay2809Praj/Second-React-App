import React from "react";
import web from "../src/images/web2.jpg";
import Common from "./Common";
// import web from "../src/images"

const Home = () => {
  return (
    <>
      <Common
        name="Grow your Business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
