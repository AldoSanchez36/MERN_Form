import React, { useState } from "react";

import img from "../../../public/ZZ2U/1. ";
import img2 from "../../../public/ZZ2U/2. ";
import img3 from "../../../public/ZZ2U/3. ";
import img4 from "../../../public/ZZ2U/4. ";
import img5 from "../../../public/ZZ2U/5. ";
import img6 from "../../../public/ZZ2U/6. ";
import img7 from "../../../public/ZZ2U/7. ";
import img8 from "../../../public/ZZ2U/8. ";

var showInfo = false;

function ToDo(props) {
  const [counter, setCounter] = useState(1);

  const [isDone, setIsDone] = useState(false);

  const [showImg1, setImg] = useState(true);
  const [showImg2, setImg2] = useState(false);
  const [showImg3, setImg3] = useState(false);
  const [showImg4, setImg4] = useState(false);
  const [showImg5, setImg5] = useState(false);
  const [showImg6, setImg6] = useState(false);
  const [showImg7, setImg7] = useState(false);
  const [showImg8, setImg8] = useState(false);

  function handelClick() {
    if (counter < 9) {
      setCounter(counter + 1);
    } else {
      setCounter(counter);
    }

    if (counter === 1) {
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
      setImg(false);
      setImg2(false);
      setImg3(false);
      setImg4(false);
      setImg5(false);
      setImg6(false);
      setImg7(false);
      setImg8(true);
    }

    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handelClick}>
      <li>
        {" "}
        {/* style={{ textDecoration: isDone ? "line-through" : "none" }} */}
        {props.text}
      </li>
      <li> {counter} </li>
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
