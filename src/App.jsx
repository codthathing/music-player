import React from "react";
import Header from "./components/layout/Header";
import Music from "./components/audio/AudioSection";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <main id="body">
      <Header />
      <Music />
      <Footer />
    </main>
  );
};

export default App;
