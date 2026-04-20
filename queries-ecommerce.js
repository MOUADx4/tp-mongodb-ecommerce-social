// ===============================
// TP MongoDB - Partie E-commerce
// Base : ecommerce
// ===============================

// Sélection de la base
use ecommerce



// ===============================
// Insertion des utilisateurs
// ===============================

db.users.insertMany([
  { nom: "Mouad", age: 21, ville: "Paris" },
  { nom: "Aubrey", age: 28, ville: "Lyon" },
  { nom: "Carti", age: 31, ville: "Marseille" }
])





// ===============================
// Insertion des produits gaming
// ===============================

db.products.insertMany([
  { nom: "PlayStation 5", prix: 549, categorie: "Gaming" },
  { nom: "Manette PS5 DualSense", prix: 69, categorie: "Gaming" },
  { nom: "Casque Gaming HyperX", prix: 89, categorie: "Gaming" },
  { nom: "Clavier Gaming RGB", prix: 129, categorie: "Gaming" }
])



// ===============================
// Création d'une commande
// ===============================

db.orders.insertOne({
  utilisateur: "Mouad",
  produits: [
    { nom: "PlayStation 5", prix: 549 },
    { nom: "Manette PS5 DualSense", prix: 69 }
  ],
  total: 618
})



// ===============================
//  Requêtes
// ===============================

// Afficher tous les utilisateurs
db.users.find().pretty()

// Produits dont le prix > 50
db.products.find({ prix: { $gt: 50 } }).pretty()

// Utilisateurs habitant à Paris
db.users.find({ ville: "Paris" }).pretty()

// Afficher toutes les commandes
db.orders.find().pretty()

// ===============================
// Mise à jour
// ===============================

//Modifier l’âge d’Aubrey
db.users.updateOne(
  { nom: "Aubrey" },
  { $set: { age: 29 } }
)

// ===============================
// Suppression d'un produit
// ===============================

// supprimer la manette PS5
db.products.deleteOne({ nom: "Manette PS5 DualSense" })
