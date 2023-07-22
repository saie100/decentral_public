import React from "react";
import Header from "./header";
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
      <Instantly />
      <Suppported />
      <Supportwallet />
      <Not />
      <Sendcrypto />
      <Footer />
    </div>
  );
}
