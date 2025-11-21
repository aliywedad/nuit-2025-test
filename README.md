1Installation

Pour installer les dépendances du projet, exécute la commande suivante :
pnpm install


2 Lancer le serveur

Pour démarrer le serveur en mode développement :
pnpm run dev
Le projet sera accessible sur http://localhost:3000(exemple)



Structure du projet
components/

Contient tous les composants réutilisables de l’application (UI, layout, boutons, formulaires…).

app/

Contient les pages et routes principales de l’application.

api/ :
Contient toutes les routes API si nécessaire (exemple : api/client/route.js).

Pages principales :
Exemple :

app/page.jsx → Home Page

app/dashboard/page.jsx → Dashboard (si applicable)

Les fichiers .jsx ou .tsx dans app/ représentent les différentes pages de l’application.



Bonnes pratiques

Organiser les composants dans components/ pour faciliter la réutilisation.

Ajouter de nouvelles API dans app/api/ avec une structure claire.

Chaque nouvelle page doit être ajoutée dans app/ en suivant la structure par dossiers pour la lisibilité.