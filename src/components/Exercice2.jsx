import { useEffect, useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice2() {
  // 1. Créez une fonction qui récupère une valeur sauvegardée dans localStorage.
  // 2. Utilisez `localStorage.getItem` pour récupérer cette valeur.
  // 3. Affichez cette valeur.

  const [count, setCount] = useState(0)

  const handleAddClick = () => {
    localStorage.setItem('count', count + 1)
    setCount(count + 1)
  }
  
  const handleSubstractClick = () => {
    localStorage.setItem('count', count - 1)
    setCount(count - 1)
  }

  useEffect(() => {
    const storedNumber = parseInt(localStorage.getItem('count'))
    if (!isNaN(storedNumber)) {
      setCount(storedNumber)
    }
  }, [])


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
          <button onClick={ handleSubstractClick}>-</button>
          <button onClick={handleAddClick}>+</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
