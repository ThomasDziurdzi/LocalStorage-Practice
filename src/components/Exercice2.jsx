import { useEffect, useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice2() {
  // 1. Créez une fonction qui récupère une valeur sauvegardée dans localStorage.
  // 2. Utilisez `localStorage.getItem` pour récupérer cette valeur.
  // 3. Affichez cette valeur.

  const [count, setCount] = useState(getSavedCount)
  const handleAddClick = () => {
    setCount(count + 1)
  }
  
  const handleSubstractClick = () => {
    setCount(count - 1)
  }

  const getSavedCount = () => {
    const storedCount = localStorage.getItem('count')
    if (storedCount) {
      return parseInt(storedCount)
    } else {
      return 0;
    }
  }

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return (
    <Exercice>
      <h2>Exercice 2 : Compteur persistant avec LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer un compteur simple qui se sauvegarde dans le
        LocalStorage. Le nombre doit persister après un rafraîchissement de la
        page.
      </p>
      <div className="solution">
        <div>
          <button onClick={() => handleSubstractClick()}>-</button>
          <button onClick={() => handleAddClick()}>+</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
