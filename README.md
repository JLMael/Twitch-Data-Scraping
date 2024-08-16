Ce projet est un scrappeur conçu pour récolter des données depuis le site StreamerBans, les mettre en forme, et les sauvegarder dans un fichier JSON. Le scrappeur récupère les informations depuis une URL spécifique et traite les données pour une utilisation ultérieure.

Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

Node.js (version 14 ou supérieure)
NPM (généralement inclus avec Node.js)
Installation
Clonez le dépôt :

bash
Copier le code
git clone https://votre-repository-url.git
cd nom-du-dossier
Installez les dépendances :

Aucune dépendance supplémentaire n'est nécessaire pour ce projet si ce n'est Node.js et ses modules natifs.

Utilisation
Pour lancer le scrapping et obtenir les données formatées dans un fichier JSON, il suffit de lancer le fichier scrape.mjs. Les données seront automatiquement récupérées, traitées, et stockées dans un fichier JSON.

Commande pour lancer le scrappeur :
bash
Copier le code
node scrape.mjs
Output
Le fichier JSON généré contiendra toutes les informations récoltées et sera sauvegardé dans le répertoire de travail courant. Le nom du fichier et son chemin exact peuvent être spécifiés dans le fichier scrape.mjs.

Structure du projet
scrape.mjs: Le script principal qui effectue le scrapping et génère le fichier JSON.
Contribuer
Les contributions sont les bienvenues ! Si vous avez des idées pour améliorer ce scrappeur ou si vous trouvez des bugs, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.
