import React from "react";
import Header from "./header";
import Music from "./music/music";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <main id="body">
        <Header/>
        <Music/>
        <Footer/>
      </main>
    </>
  );
};

export default Home;