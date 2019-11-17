import React from "react";

import "./App.css";
import FormEmployee from "./components/FormEmployee";

const config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify()
};

const url = "https://post-a-form.herokuapp.com/api/movies/";

fetch(url, config)
  .then(res => res.json())
  .then(res => {
    if (res.error) {
      alert(res.error);
    } else {
      alert(`Film ajouté avec l'ID ${res}!`);
    }
  })
  .catch(e => {
    console.error(e);
    alert("Erreur lors de l'ajout d'un employé");
  });

function App() {
  return (
    <div className="App">
      <FormEmployee />
    </div>
  );
}

export default App;
