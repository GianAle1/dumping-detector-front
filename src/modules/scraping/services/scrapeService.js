// src/modules/scraping/services/scrapeService.js
export async function scrapeProduct({ producto, plataforma }) {
  const res = await fetch("http://localhost:5000/api/scrape", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ producto, plataforma }),
  });

  const data = await res.json();
  return data;
}
