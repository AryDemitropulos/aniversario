import React from "react";
import Countdown from "react-countdown";
import { Typewriter } from "react-simple-typewriter";
import { CarouselContainer } from "./CarouselContainer";
import { CountdownManager } from "./CountdownManager";
import { SpotifyPlayerContainer } from "./SpotifyPlayerContainer";
import { TyperContainer } from "./TyperContainer";

export const Main = () => {
  const text = [
    "Hermosa...",
    "Antes de arrancar, hay un par de cosas subidas de tono en el carrusel. Yo que vos lo saco rápido si se lo estás mostrando a alguien (?",

    "Mentira... jajajaja soy más gracioso...",

    "Lo que sí, pone play... no pude hacer que se autorreproduzca... un fracaso...",

    "Perdón por el regalo cutre, es lo que pude armar con los días que me quedaron en Barcelona",

    "Ahora sí... coff coff... preparate para una explicación teórica cuántica (?",

    "Preciosa mía.\n¿No notaste que este año paso muy rápido?\n¿Qué no hubo tiempo para nada?",

    "Parece que fue hace un par de meses que [INSERTE_ALGO_QUE_HICIMOS_EN_ENERO]",



    "Pareciera que el tiempo paso más rápido.\nPero eso es imposible...\n",



    "¿O no...?",



    "Una vez cada 400 años, la galaxia está retrógrada [MEME_SHREK_BARBIJO], lo que hace que pasen cosas como:\n\nFerrari haciendo todo mal.\nEl Checo ganando Mónaco.\nO que el tiempo pase más rápido\n",



    "Es por eso que, según mis cálculos, nuestro aniversario que tenía que ser el 2 de Noviembre, es en realidad el 13 de Noviembre.\nDía que también vuelvo a la Argentina",



    "Por eso programé esta página, para que puedas ver cuanto falta para nuestro aniversario de verdad",

    "Te amo muchísimo hermosa mía",

    "Perdón por no estar para tu cumple... y para nuestro primer aniversario",

    "Sé que es difícil, todo lo que puedo hacer es tratar de convencerte de atrasar el tiempo (fuck, era atrasar, no adelantar, ni para esto sirvo) para que podamos celebrar nuestro aniversario cuando vuelva",

    "",
    "Te extraño muchisimo hermosa mia, no veo las horas de verte",

    "",

    "esto es un loop... te amo muchisimo preciosa mia...",

  ];

  return (
    <div className="main-container">
      <div className="main">
        <CarouselContainer />
        <Countdown
          date={new Date(1668327544000)}
          intervalDelay={1000}
          precision={1}
          renderer={(props) => <CountdownManager {...props.formatted} />}
        />
        <TyperContainer text={text} />
      </div>
    </div>
  );
};
