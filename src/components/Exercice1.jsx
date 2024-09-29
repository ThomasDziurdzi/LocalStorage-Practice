import Exercice from "./container/Exercice";

export default function Exercice1() {
  // 1. Utilisez un state pour stocker la valeur saisie par l'utilisateur.
  // 2. Utilisez une fonction qui sera appelée lorsqu'une valeur est saisie pour mettre à jour l'état avec la valeur du champ de saisie.
  // 3. Utilisez `localStorage.setItem` pour enregistrer la valeur dans localStorage lorsque l'utilisateur saisit une nouvelle valeur.
  // 4. Utilisez `useEffect` pour récupérer la valeur initiale du localStorage avec `localStorage.getItem` lors du premier rendu
  //    et mettre à jour l'état avec cette valeur.

  return (
    <Exercice>
      <h2>Excercie 1 : Stocker le texte dans LocalStorage</h2>
      <p className="instructions">
        Objectif : Chaque fois que l'utilisateur tape dans le champ de texte, la
        valeur doit être sauvegardée dans le LocalStorage. Lorsque l'utilisateur
        recharge la page, la valeur doit être restaurée à partir du
        LocalStorage.
      </p>
      <div className="solution">
        <div>
          <input type="text" />
        </div>
      </div>
    </Exercice>
  );
}
