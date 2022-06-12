import React from "react";

import Left from "./Left";
import Right from "./Right";

export default function Home({ id }) {
  return (
    <div className={"section-home"} id={id}>

      <div className="section-content-home" >

        <Left />

        <Right />

      </div>

    </div>
  );
}
