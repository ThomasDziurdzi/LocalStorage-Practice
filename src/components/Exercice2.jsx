import Exercice from "./container/Exercice";

export default function Exercice2() {
  // 1. Créez une fonction qui récupère une valeur sauvegardée dans localStorage.
  // 2. Utilisez `localStorage.getItem` pour récupérer cette valeur.
  // 3. Affichez cette valeur.

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
          <button>-</button>
          <button>+</button>
          <p>Compteur : 0</p>
        </div>
      </div>
    </Exercice>
  );
}
