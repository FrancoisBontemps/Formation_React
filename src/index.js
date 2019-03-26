import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Screen/Home";
//import "./styles.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

//"root" point d'entrée du DOM
//Injection du composant par reactDOM dans le DOM
const rootElement = document.getElementById("root");
//On recupère App (react) et on l'injecte dans la div root
//(point d'entrée dans le fichier )
ReactDOM.render(<App />, rootElement);
