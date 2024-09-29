import Exercice from "./container/Exercice";

export default function Exercice4() {
  // 1. Utilisez `useState` pour stocker et gérer la liste des tâches.
  // 2. À chaque ajout de tâche, sauvegardez la liste mise à jour dans le LocalStorage avec `localStorage.setItem`.
  // 3. Utilisez `useEffect` pour récupérer la liste des tâches à partir du LocalStorage lors du chargement initial de la page avec `localStorage.getItem`.
  // 4. Affichez les tâches récupérées

  return (
    <Exercice>
      <h2>Exercice 4 : Liste de tâches avec sauvegarde dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Créer une application de liste de tâches (To-Do List) qui
        sauvegarde et restaure la liste des tâches depuis le LocalStorage.
      </p>
      <div className="solution">
        <input type="text" />
        <button>Ajouter une tâche</button>
      </div>
    </Exercice>
  );
}
