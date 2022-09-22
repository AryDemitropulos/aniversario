import React from "react";
import { SpotifyPlayerContainer } from "./SpotifyPlayerContainer";

export const Footer = () => {
  return (
    <div style={{ width: "80vw" }}>
      <h5>Tocar la parte 'roja' de la página para reproducir la música.</h5>
      <h6>
        No hay ningún video gigante al fondo de la pagina con opacity 0 porque
        no pude poner un reproductor como la gente, hermosa.
      </h6>
      <SpotifyPlayerContainer />
    </div>
  );
};
