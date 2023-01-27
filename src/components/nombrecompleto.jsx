import React from "react";
import "../App.css";
import { Edad } from "./edad";

export const NombreCompleto = (props) => {
    console.log("props", props);
  return (
   <> {/*Reac.Fragment*/}
    <h3 className="Juan" >Me llamo {props.nombre}</h3>
      <Edad edad={props.age} show={props.show} />

    </>
  );
};



{/*  export { NombreCompleto, OtraExportación};
 */}