import React, { useState } from "react";
import { Checkbox } from "carbon-components-react";
import { Button } from "carbon-components-react";

import img from "./public/ZZ4U/1. Fillers y Latches - Parte frontal.jpg";
import img2 from "./public/ZZ4U/2. Filler mech - lateral derecho.png";
import img3 from "./public/ZZ4U/3. Etiqueta angecy label-wu-machine serial-QR- Parte superior.jpg";
import img4 from "./public/ZZ4U/4. Etiqueta destructible- Lateral derecho.jpg";
import img5 from "./public/ZZ4U/5. Etiqueta QR.PNG";
import img6 from "./public/ZZ4U/6. Etiqueta 2D- Latch izquierdo .PNG";
import img7 from "./public/ZZ4U/7. Etiqueta de la India - EN CASO DE QUE EL SISTEMA LA PIDA.PNG";
import img8 from "./public/ZZ4U/8. Etiqueta Argentina - EN CASO DE QUE EL SISTEMA LA PIDA.PNG";

function ToDo(props) {
  const [counter, setCounter] = useState(1);
  const [leyenda, setLeyenda] = useState("Fillers y Latches - Parte frontal");

  const [showImg1, setImg] = useState(true);
  const [showImg2, setImg2] = useState(false);
  const [showImg3, setImg3] = useState(false);
  const [showImg4, setImg4] = useState(false);
  const [showImg5, setImg5] = useState(false);
  const [showImg6, setImg6] = useState(false);
  const [showImg7, setImg7] = useState(false);
  const [showImg8, setImg8] = useState(false);

  const [resetCheck, setCheck] = useState(false);
  const [sigiente, setSiguiente] = useState(false);

  const btnSigiente = (
    // display: showImg1 ? "block" : "none"
    <Button onClick={handelClick} style={{ margin: "0 5px 5px 0" }}>
      Siguiente
    </Button>
  );
  function handelCheck() {
    setIsChecked(true);
    setCheck(true);
    if (counter >= 9) {
      setIsChecked(false);
    }
  }

  function handelClick() {
    setSiguiente(true);
    setCheck(false);
    setIsChecked(false);

    if (counter < 9) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
      setCheck(true);
      // setIsChecked(true);
    }

    if (counter === 1) {
      setLeyenda("Filler mech - lateral derecho");
      setImg(false);
      setImg2(true);
      setImg3(false);
      setImg4(false);
      setImg5(false);
      setImg6(false);
      setImg7(false);
      setImg8(false);
    }
    if (counter === 2) {
      setLeyenda("Etiqueta angecy label-wu-machine serial-QR- Parte superior");
      setImg(false);
      setImg2(false);
      setImg3(true);
      setImg4(false);
      setImg5(false);
      setImg6(false);
      setImg7(false);
      setImg8(false);
    }
    if (counter === 3) {
      setLeyenda("Etiqueta destructible- Lateral derecho");
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(true);
      setImg5(false);
      setImg6(false);
      setImg7(false);
      setImg8(false);
    }
    if (counter === 4) {
      setLeyenda("Etiqueta QR");
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(true);
      setImg6(false);
      setImg7(false);
      setImg8(false);
    }
    if (counter === 5) {
      setLeyenda("Etiqueta 2D- Latch izquierdo");
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(false);
      setImg6(true);
      setImg7(false);
      setImg8(false);
    }
    if (counter === 6) {
      setLeyenda("Etiqueta de la India - EN CASO DE QUE EL SISTEMA LA PIDA");
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(false);
      setImg6(false);
      setImg7(true);
      setImg8(false);
    }
    if (counter === 7) {
      setLeyenda("Etiqueta Argentina - EN CASO DE QUE EL SISTEMA LA PIDA");
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(false);
      setImg6(false);
      setImg7(false);
      setImg8(true);
    }

    // setIsDone((prevValue) => {
    //   return !prevValue;
    // });
  }
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <li> {props.text}</li>
      <h4>
        {" "}
        {counter} {leyenda}
      </h4>

      <Checkbox
        onClick={handelCheck}
        labelText={`listo`}
        id="checkbox-label"
        checked={resetCheck}
      />
      {isChecked === true ? btnSigiente : ""}
      <img
        src={img}
        alt="imagen"
        style={{ display: showImg1 ? "block" : "none" }}
      />
      <img
        src={img2}
        alt="imagen2"
        style={{ display: showImg2 ? "block" : "none" }}
      />
      <img
        src={img3}
        alt="imagen2"
        style={{ display: showImg3 ? "block" : "none" }}
      />
      <img
        src={img4}
        alt="imagen2"
        height="600px"
        width="800px"
        style={{ display: showImg4 ? "block" : "none" }}
      />
      <img
        src={img5}
        alt="imagen2"
        style={{ display: showImg5 ? "block" : "none" }}
      />
      <img
        src={img6}
        alt="imagen2"
        style={{ display: showImg6 ? "block" : "none" }}
      />
      <img
        src={img7}
        alt="imagen2"
        style={{ display: showImg7 ? "block" : "none" }}
      />
      <img
        src={img8}
        alt="imagen2"
        style={{ display: showImg8 ? "block" : "none" }}
      />
    </div>
  );
}
export default ToDo;
