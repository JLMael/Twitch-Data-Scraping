import { writeFile } from "fs/promises";

// StreamerBans expose ses données via l'API interne de Next.js.
// Le BUILD_ID change à chaque déploiement du site : si le scraper renvoie
// des 404, récupère le nouveau hash dans le HTML de https://streamerbans.com
// (balise <script src="/_next/static/<BUILD_ID>/_buildManifest.js">).
const BUILD_ID = "1mnxel7WR27f6Xxs_7zrP";
const BASE_URL = `https://streamerbans.com/_next/data/${BUILD_ID}/streamers.json?page=`;
const TOTAL_PAGES = 1067;
const OUTPUT_FILE = "allData.json";

async function scrapeData() {
  const allData = [];

  for (let page = 1; page <= TOTAL_PAGES; page++) {
    try {
      const response = await fetch(`${BASE_URL}${page}`);
      if (!response.ok) {
        console.error(`Page ${page} : HTTP ${response.status}`);
        continue;
      }
      allData.push(await response.json());
      console.log(`Page ${page}/${TOTAL_PAGES} récupérée`);
    } catch (error) {
      console.error(`Erreur sur la page ${page} :`, error.message);
    }
  }

  await writeFile(OUTPUT_FILE, JSON.stringify(allData, null, 2));
  console.log(`Données enregistrées dans ${OUTPUT_FILE} (${allData.length} pages)`);
}

scrapeData();
