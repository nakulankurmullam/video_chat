import React, { useState } from "react";
import Selection from "./Selection";
import VidCall from "./VidCall";
import Navigation from "./Navigation";

function Home() {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <Navigation />
      {!selected && <Selection setSelected={setSelected} />}
      {selected && <VidCall />}
    </>
  );
}

export default Home;
