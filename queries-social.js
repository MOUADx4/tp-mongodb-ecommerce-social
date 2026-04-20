// ===============================
// TP MongoDB - Partie Réseau Social
// Base : socialapp
// ===============================

// Sélection de la base
use socialapp



// ===============================
// 1) Insertion des utilisateurs
// ===============================

db.users.insertMany([
  { nom: "Mouad", age: 21 },
  { nom: "Aubrey", age: 28 },
  { nom: "Carti", age: 31 }
])




// ===============================
// 2) Insertion des publications
// ===============================

db.posts.insertMany([
  { auteur: "Mouad", contenu: "first publication", date: new Date(), commentaires: [], likes: [] },
  { auteur: "Aubrey", contenu: "ICEMAN OTW", date: new Date(), commentaires: [], likes: [] },
  { auteur: "Carti", contenu: "I AM THE MUSIC", date: new Date(), commentaires: [], likes: [] },
  { auteur: "Mouad", contenu: "WAITING FOR IT", date: new Date(), commentaires: [], likes: [] },
  { auteur: "Aubrey", contenu: "ITS IN", date: new Date(), commentaires: [], likes: [] }
])




// ===============================
// 3) Ajouter un commentaire
// ===============================

db.posts.updateOne(
  { auteur: "Aubrey", contenu: "ICEMAN OTW" },
  { 
    $push: { 
      commentaires: { 
        auteur: "Mouad", 
        texte: "Freeze The World", 
        date: new Date() 
      } 
    } 
  }
)




// ===============================
// 4) Ajouter un like
// ===============================

db.posts.updateOne(
  { auteur: "Carti", contenu: "I AM THE MUSIC" },
  { $push: { likes: "Mouad" } }
)




// ===============================
// 5) Requêtes
// ===============================

// Afficher toutes les publications
db.posts.find().pretty()

// Afficher les publications d'un utilisateur
db.posts.find({ auteur: "Mouad" }).pretty()

// Afficher les commentaires d'une publication
db.posts.find(
  { contenu: "ICEMAN OTW" },
  { commentaires: 1, _id: 0 }
).pretty()

// Trouver la publication avec le plus de likes
db.posts.aggregate([
  { $project: { auteur: 1, contenu: 1, nbLikes: { $size: "$likes" } } },
  { $sort: { nbLikes: -1 } },
  { $limit: 1 }
])

// Compter le nombre de publications par utilisateur
db.posts.aggregate([
  { $group: { _id: "$auteur", total: { $sum: 1 } } }
])
