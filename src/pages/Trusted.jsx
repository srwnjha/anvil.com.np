import React from "react";

import Header from "../components/header/HeaderOne";
import Footer from "../components/footer/FooterOne";
import TrustedByOrganization from "../components/sections/TrustedByOrganization";
import ClientSection from "../components/sections/ClientSection";

const Trusted = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "120px" }}>
        {" "}
        <TrustedByOrganization />
        <ClientSection />
      </div>{" "}
      <Footer />
    </>
  );
};

export default Trusted;
