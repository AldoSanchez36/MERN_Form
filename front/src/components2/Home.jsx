import React, { useState } from "react";
import { RadioButtonGroup, RadioButton } from "carbon-components-react";
import { Button } from "carbon-components-react";
import { Add16, Delete16 } from "@carbon/icons-react";
import { TextInput } from "carbon-components-react";
import { Select } from "carbon-components-react";
import { SelectItem } from "carbon-components-react";
import { SelectItemGroup } from "carbon-components-react";
import ToDo from "./Remplazos/ToDo";

const variable = true;

function ZZ4U() {
  // const [backGround] = "#123"
  const [backGround, setBg] = useState("123");

  const [items, setItems] = useState([]);

  const [inputImg, setInputImg] = useState("");
  const [imgs, setImgs] = useState([]);

  function Add() {
    // console.log(inputText);
    if (inputText === "ZZ4U") {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setInputText("");
      addImg();
    } else {
      setInputText("no es ZZ 4U");
    }
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
    setBg("#434546");
  };
  const handleLight = () => {
    setBg("#fff");
  };

  const [inputText, setInputText] = useState();

  function handleChange(event) {
    // console.log();
    const newValue = event.target.value;
    // console.log(newValue);
    setInputText(newValue);
  }

  return (
    <div >
    {/* style={{ background: "#434546" }} */}
      <RadioButtonGroup
        name="radio-button-group"
        defaultSelected="radio-1"
        // onChange={(x) => {
        //   console.log(x);
        //   {
        //     x === "Dark" ? handleDark() : "none";
        //   }
        //   {
        //     x === "Light" ? handleLight() : "none";
        //   }
        // }}
      >
        <RadioButton labelText="Dark" value="Dark" id="radio-1" />
        <RadioButton labelText="Light" value="Light" id="radio-2" />
      </RadioButtonGroup>

      <div style={{ background: backGround }}>
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <h1 style={{ marginTop: "10px", marginRight: "10px", color: "blue" }}>
            Sistema
          </h1>
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
              placeholder="Manufactury Number"
              hideLabel="true"
              style={{ width: "200px", marginLeft: "5px" }}
            />
            <TextInput
              // value={inputText}
              id="Remplazo"
              invalidText="Invalid error message."
              labelText="Text input label"
              placeholder="W.U."
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
        <Button
          style={{ margin: "0 5px 5px 0" }}
          renderIcon={Add16}
          iconDescription="Icon Description"
          hasIconOnly
          onClick={Add}
        />
        <Button style={{ margin: "0 5px 5px 0" }}>Button</Button>
        <Button
          renderIcon={Delete16}
          kind="danger"
          onClick={deleteItem}
          iconDescription="Delete"
          style={{ margin: "0 5px 5px 0" }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ZZ4U;
