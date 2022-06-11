import React from "react";

import Left from "./Left";
import Right from "./Right";

export default function Home({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content-home" id={id}>

        <Left/>

        <Right/>

      </div>
    </div>
  );
}
