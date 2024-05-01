import React, { useContext } from "react";
import Structure from "./structure";
import { PlayContext } from "../navigate";

const Music = () => {

  let { listOfAudios } = useContext(PlayContext);

  return (
    <main>
      <section id="musicSection">
        {listOfAudios.map((details) => {
          return <Structure key={details.id} {...details}></Structure>
        })};
      </section>
    </main>
  );
};

export default Music;