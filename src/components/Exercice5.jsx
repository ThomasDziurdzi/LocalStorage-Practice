import Exercice from "./container/Exercice";
import { useState } from "react";

export default function Exercice5() {
  // 1. Utilisez `useEffect` pour récupérer le panier du localStorage lors du chargement de la page
  // 2. Fonction pour ajouter un produit au panier
  // 3. Fonction pour supprimer un produit du panier
  // 4. Calculer le total du panier

  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Produit A", price: 29.99 },
    { id: 2, name: "Produit B", price: 19.99 },
    { id: 3, name: "Produit C", price: 49.99 },
  ]);

  return (
    <Exercice>
      <h2>Exercice 5 : Panier de Boutique avec LocalStorage</h2>
      <p className="instructions">
        Objectif : Cet exercice simule un panier d'achat où les utilisateurs
        peuvent ajouter ou supprimer des produits, et ces informations sont
        sauvegardées dans le LocalStorage.
      </p>
      <div className="solution">
        <h2>Panier de Boutique avec LocalStorage</h2>

        <h3>Produits disponibles :</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price.toFixed(2)}€
              <button>Ajouter au panier</button>
            </li>
          ))}
        </ul>

        <h3>Votre panier :</h3>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price.toFixed(2)}€<button>Retirer</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Votre panier est vide.</p>
        )}

        <h3>Total : {}€</h3>
      </div>
    </Exercice>
  );
}


// Explication des étapes :

// State pour gérer les produits et le panier :

    // Une liste fixe de produits est définie dans le state products.
    // Un autre state cart est utilisé pour gérer les éléments du panier, initialisé à un tableau vide.

// Récupération du panier avec useEffect :

    // Lors du premier chargement du composant, useEffect est utilisé pour vérifier si un panier est déjà stocké dans le LocalStorage. Si c'est le cas, on le récupère et on met à jour le state cart.

// Ajout au panier :

    // Lorsque l'utilisateur clique sur "Ajouter au panier", le produit sélectionné est ajouté au state cart et la nouvelle version du panier est sauvegardée dans le LocalStorage.

// Suppression du panier :

    // Un produit peut être supprimé du panier en cliquant sur "Retirer". Le panier est alors mis à jour dans le state et dans le LocalStorage.
