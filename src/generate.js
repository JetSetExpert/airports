const axios = require("axios");
const csvParser = require("csv-parser");
const fs = require("fs");

const airportSourceUrl =
  "https://davidmegginson.github.io/ourairports-data/airports.csv";
const countrySourceUrl =
  "https://davidmegginson.github.io/ourairports-data/countries.csv";
const regionSourceUrl =
  "https://davidmegginson.github.io/ourairports-data/regions.csv";

const airportOutputFile = "./data/airports.json";
const countryOutputFile = "./data/countries.json";
const regionOutputFile = "./data/regions.json";

const allowedTypes = process.argv.includes("--types")
  ? process.argv[process.argv.indexOf("--types") + 1].split(",")
  : ["medium_airport", "large_airport"];

const fetchDataAndGenerateJson = async (sourceUrl, outputFile, filterFn) => {
  const response = await axios.get(sourceUrl, { responseType: "stream" });
  const data = response.data.pipe(csvParser());
  const parsedData = [];

  data
    .on("data", (row) => {
      if (!filterFn || filterFn(row)) {
        parsedData.push(row);
      }
    })
    .on("end", () => {
      fs.writeFileSync(outputFile, JSON.stringify(parsedData, null, 2));
      console.log(`Generated ${outputFile}`);
    });
};

fetchDataAndGenerateJson(airportSourceUrl, airportOutputFile, (row) =>
  allowedTypes.includes(row.type)
);
fetchDataAndGenerateJson(countrySourceUrl, countryOutputFile);
fetchDataAndGenerateJson(regionSourceUrl, regionOutputFile);
