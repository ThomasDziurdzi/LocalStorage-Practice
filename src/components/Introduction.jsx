export default function Introduction() {
  return (
    <div className="exercice">
      <h1>Introduction au LocalStorage</h1>
      <p>
        Le LocalStorage est une API JavaScript intégrée aux navigateurs
        modernes, permettant de stocker des données sous forme de paires
        clé-valeur. Ces données persistent même après la fermeture du
        navigateur, jusqu'à leur suppression manuelle.
      </p>
      <p>
        Les principales méthodes de l'API LocalStorage incluent{" "}
        <span className="green">`setItem`</span> pour sauvegarder des données,{" "}
        <span className="green">`getItem`</span> pour les récupérer,{" "}
        <span className="green">`removeItem`</span> pour les supprimer, et{" "}
        <span className="green">`clear`</span> pour effacer toutes les données.
      </p>
      <div className="code-container">
        <div className="cm-line">
          <p>// Sauvegarder des données :</p>
          <p>
            localStorage.<span className="green">setItem</span>(
            <span className="yellow">'clé'</span>,{" "}
            <span className="yellow">'valeur'</span>)
          </p>
          <p>// Récupérer des données :</p>
          <p>
            <span className="pink">const</span>{" "}
            <span className="violet">valeur</span>{" "}
            <span className="pink">=</span> localStorage.
            <span className="green">getItem</span>(
            <span className="yellow">'clé'</span>)
          </p>
          <p>// Supprimer une donnée spécifique :</p>
          <p>
            localStorage.<span className="green">removeItem</span>(
            <span className="yellow">'clé'</span>)
          </p>
          <p>// Effacer tout le LocalStorage :</p>
          <p>
            localStorage.<span className="green">clear</span>()
          </p>
        </div>
      </div>
      <p>Pour plus de détails, consulte le README.</p>
    </div>
  );
}
