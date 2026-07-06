# Twitch Data Scraping

Petit scraper Node.js qui récupère les données publiques de streamers Twitch
depuis [StreamerBans](https://streamerbans.com), les agrège et les enregistre
dans un fichier `allData.json`.

## Prérequis

- Node.js **18 ou supérieur** (le script utilise `fetch` natif, aucune
  dépendance externe).

## Utilisation

```bash
git clone https://github.com/JLMael/Twitch-Data-Scraping.git
cd Twitch-Data-Scraping
npm run scrape   # ou : node scrape.mjs
```

Le script parcourt les ~1067 pages de l'API et écrit le résultat dans
`allData.json` (fichier volumineux, non versionné).

## Structure des données

Chaque page renvoie un objet Next.js contenant `pageProps.users`, une liste de
streamers avec notamment :

| Champ               | Description              |
| ------------------- | ------------------------ |
| `display_name`      | Nom affiché de la chaîne |
| `login_name`        | Identifiant Twitch       |
| `followers`         | Nombre de followers      |
| `is_partner`        | Statut partenaire        |
| `is_suspended`      | Chaîne suspendue ou non  |
| `profile_image_url` | URL de l'avatar          |

## Note

L'API de StreamerBans repose sur un `BUILD_ID` Next.js qui change à chaque
déploiement du site. Si le scraper renvoie des erreurs 404, mets à jour la
constante `BUILD_ID` en tête de `scrape.mjs` (voir le commentaire du fichier).

## Licence

[MIT](LICENSE)
