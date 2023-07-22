import React from "react";
import Header from "./header";
import Heroslick from "./Heroslick";
import Instantly from "./Instantly";
import Suppported from "./Suppported";
import Supportwallet from "./Supportwallet";
import Not from "./Not";
import Sendcrypto from "./Sendcrypto";
import Footer from "./Footer";

export default function index() {
  return (
    <div>
      <Header />
      <Heroslick />
      <Instantly />
      <Suppported />
      <Supportwallet />
      <Not />
      <Sendcrypto />
      <Footer />
    </div>
  );
}
