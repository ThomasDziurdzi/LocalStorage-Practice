import Exercice from "./container/Exercice";

export default function Exercice3() {
  // Créez des boutons qui, lorsqu'ils sont cliqués, supprime une entrée spécifique du LocalStorage (utilisez `localStorage.removeItem`).

  return (
    <Exercice>
      <h2>Exercice 3 : Supprimer une entrée spécifique dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Créez des boutons qui, lorsqu'ils sont cliqués, supprime une
        entrée spécifique du LocalStorage (utilisez `localStorage.removeItem`).
      </p>
      <div className="solution">
        <button onClick={() => {localStorage.removeItem("salut"); window.location.reload()} }>
          Supprimer les données de l'Exercice 1
        </button>
        <button onClick={() => {localStorage.removeItem("count"); window.location.reload()}}>
          Supprimer les données de l'Exercice 2
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.reload(); // reloads the current webpage, either from the browser cache or from the server if the cache is bypassed.
          }}
        >
          Effacer tout le LocalStorage
        </button>
      </div>
    </Exercice>
  );
}
