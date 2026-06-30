import React from "react";

import Header from "../components/header/HeaderOne";
import Footer from "../components/footer/FooterOne";
import Tech from "../components/sections/Tech";

const Technology = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "120px" }}>
        {" "}
        {/* Bootstrap class - you can use mt-4, mt-5, mt-6 etc. */}
        <Tech />
      </div>{" "}
      <Footer />
    </>
  );
};

export default Technology;
