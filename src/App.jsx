import React from "react";
import Header from "./components/layout/Header";
import AudioSection from "./components/audio/AudioSection";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <main id="body">
      <Header />
      <AudioSection />
      <Footer />
    </main>
  );
};

export default App;
