import React from "react";
import { DateBox } from "./DateBox";

export const CountdownManager = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <h5 className="m15">
        Cuenta regresiva para nuestro VERDADERO aniversario
      </h5>
      <div className="countdown-container d-flex">
        <div className="d-flex">
          <DateBox text="Dias" number={days} />
          <DateBox text="Horas" number={hours} />
          <DateBox text="Minutos" number={minutes} />
          <DateBox text="Segundos" number={seconds} />
        </div>
      </div>
    </>
  );
};
