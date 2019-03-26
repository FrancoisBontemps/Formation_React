import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Title } from "./Title.js";
import { MyFirstComponent } from "./MyFirstComponent";

function App() {
  const obj1 = { name: "francois", age: 24, work: false };
  const obj2 = { name: "Leo", age: 7, work: false };
  //console.log({ ...obj1 });

  return (
    <div className="App">
      <Title text="TEST" />
      <MyFirstComponent title="Bonjour" />
      <MyFirstComponent />
      <MyFirstComponent title="SALUT" />
    </div>
  );
}

//"root" point d'entrée du DOM
//Injection du composant par reactDOM dans le DOM
const rootElement = document.getElementById("root");
//On recupère App (react) et on l'injecte dans la div root
//(point d'entrée dans le fichier )
ReactDOM.render(<App />, rootElement);
