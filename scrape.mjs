import { writeFile } from "fs/promises";

async function scrapeData() {
  const baseURL =
    "https://streamerbans.com/_next/data/1mnxel7WR27f6Xxs_7zrP/streamers.json?page=";
  const totalPages = 1067;
  let allData = [];

  for (let page = 1; page <= totalPages; page++) {
    try {
      const response = await fetch(`${baseURL}${page}`);
      const data = await response.json();
      allData.push(data);
      console.log(`Fetched page ${page}`);
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
    }
  }

  try {
    await writeFile("allData.json", JSON.stringify(allData, null, 2));
    console.log("Data saved to allData.json");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

scrapeData();
