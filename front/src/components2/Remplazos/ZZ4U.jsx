import React, { useState } from "react";
import { RadioButtonGroup, RadioButton } from "carbon-components-react";
import { Button } from "carbon-components-react";
import { Add16, Delete16 } from "@carbon/icons-react";
import { TextInput } from "carbon-components-react";
import { Select } from "carbon-components-react";
import { SelectItem } from "carbon-components-react";
import { SelectItemGroup } from "carbon-components-react";
import ToDo from "./ToDo";

const sistema = "";

function ZZ4U() {
  // const [backGround] = "#123"
  const [backGround, setBg] = useState("123");

  const [items, setItems] = useState([]);

  const [inputImg, setInputImg] = useState("");
  const [imgs, setImgs] = useState([]);

  function Add() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
    addImg();
  }
  function addImg() {
    setImgs((prevItems) => {
      return [...prevItems, inputImg];
    });
    setInputImg("");
  }

  function deleteImg() {
    setImgs(() => {
      return [];
    });
    setInputImg("");
  }
  function deleteItem() {
    setItems(() => {
      return [];
    });
    setInputText("");
    deleteImg();
  }

  const handleDark = () => {
    setBg("black");
  };
  const handleLight = () => {
    setBg("#fff");
  };
  const [inputText, setInputText] = useState();

  function handleChange(event) {
    console.log();
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div style={{ background: "#434546" }}>
      <div style={{ background: backGround }}>
        <div className="form">
          <div
            style={{ marginBottom: "2rem", display: "flex", width: "370px" }}
          >
            <Select
              style={{ width: "auto" }}
              invalidText="This is an invalid error message."
              labelText="*Status"
              hideLabel="true"
              onChange={handleChange}
            >
              <SelectItemGroup label="--Remplazo--">
                <SelectItem width="150px" text="ZZ 2U" value="ZZ2U" />
                <SelectItem width="150px" text="ZZ 4U" value="ZZ4U" />
                <SelectItem width="150px" text="Fleetwood" value="Fleetwood" />
                <SelectItem width="150px" text="Zeppelin" value="Zeppelin" />
                <SelectItem width="150px" text="MACK" value="MACK" />
                <SelectItem width="150px" text="wsp-aire" value="wsp-aire" />
                <SelectItem width="150px" text="wsp-agua" value="wsp-agua" />
                <SelectItem width="150px" text="Mihawk" value="Mihawk" />
              </SelectItemGroup>
            </Select>
            <TextInput
              // value={inputText}
              id="Remplazo"
              invalidText="Invalid error message."
              labelText="Text input label"
              placeholder={inputText}
              hideLabel="true"
              style={{ width: "200px", marginLeft: "5px" }}
            />
          </div>
        </div>
        <div>
          <ul>
            {items.map((todoItem) => (
              <ToDo text={todoItem} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ZZ4U;
