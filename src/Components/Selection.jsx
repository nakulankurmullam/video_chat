import React from "react";
import './Selection.css'

function Selection({ setSelected }) {
  return (
    <div id="selection">
      <button onClick={()=>setSelected(true)} id="strt-vid">Start Video chat!!!</button>
      <button id="strt-aud">Start Audio only!!</button>
    </div>
  );
}

export default Selection;
