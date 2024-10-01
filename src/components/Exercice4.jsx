import { useEffect, useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice4() {
  const [list, setList] = useState([]);
  const [listElement, setListElement] = useState("");
  // 1. Utilisez `useState` pour stocker et gérer la liste des tâches.
  // 2. À chaque ajout de tâche, sauvegardez la liste mise à jour dans le LocalStorage avec `localStorage.setItem`.
  // 3. Utilisez `useEffect` pour récupérer la liste des tâches à partir du LocalStorage lors du chargement initial de la page avec `localStorage.getItem`.
  // 4. Affichez les tâches récupérées

  const handleClick = () => {
    const newValue = [...list, listElement];
    localStorage.setItem("to-do-list", JSON.stringify(newValue));
    setList(newValue);
    setListElement("")
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('to-do-list'))
    if (storedList) {
      setList(storedList)
    }
  }, [list])

  return (
    <Exercice>
      <h2>Exercice 4 : Liste de tâches avec sauvegarde dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer une application de liste de tâches (To-Do List) qui
        sauvegarde et restaure la liste des tâches depuis le LocalStorage.
      </p>
      <div className="solution">
        <input
          type="text"
          value={listElement}
          onChange={(e) => setListElement(e.target.value)}
        />
        <button onClick={handleClick}>Ajouter une tâche</button>
        <ul>
          {list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </Exercice>
  );
}
