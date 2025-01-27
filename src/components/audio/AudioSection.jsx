import React, { useContext } from "react";
import Structure from "./AudioTemplate";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const Music = () => {
  let { listOfAudios } = useContext(NavigateContext);

  return (
    <main>
      <section id="musicSection">
        {listOfAudios.map((details) => {
          return <Structure key={details.id} {...details}></Structure>;
        })}
        ;
      </section>
    </main>
  );
};

export default Music;
