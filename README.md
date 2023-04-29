# Airports

Airports provides JSON datasets of airports, including name, coordinates, elevation, country, region, IATA code and GPS code. Created by the team at [Jet Set Expert](https://jetsetexpert.com).

## Features

- Provides JSON datasets for airports, countries, and regions
- Generated datasets are filtered to include only medium and large airports by default
- Customizable airport types through the `--types` flag
- Fetches data from the following sources:
  - [OurAirports: airports.csv](https://davidmegginson.github.io/ourairports-data/airports.csv)
  - [OurAirports: countries.csv](https://davidmegginson.github.io/ourairports-data/countries.csv)
  - [OurAirports: regions.csv](https://davidmegginson.github.io/ourairports-data/regions.csv)

## Sample data

### airports.json

```
[
  {
    "id": "12243",
    "ident": "5A8",
    "type": "medium_airport",
    "name": "Aleknagik / New Airport",
    "latitude_deg": "59.2826004028",
    "longitude_deg": "-158.617996216",
    "elevation_ft": "66",
    "continent": "NA",
    "iso_country": "US",
    "iso_region": "US-AK",
    "municipality": "Aleknagik",
    "scheduled_service": "yes",
    "gps_code": "5A8",
    "iata_code": "WKK",
    "local_code": "5A8",
    "home_link": "",
    "wikipedia_link": "https://en.wikipedia.org/wiki/Aleknagik_Airport",
    "keywords": ""
  },
  ...
]
```

### countries.json

```
[
  {
    "id": "302672",
    "code": "AD",
    "name": "Andorra",
    "continent": "EU",
    "wikipedia_link": "https://en.wikipedia.org/wiki/Andorra",
    "keywords": "Andorran airports"
  },
  ...
]
```

### regions.json

```
[
  {
    "id": "302811",
    "code": "AD-02",
    "local_code": "02",
    "name": "Canillo Parish",
    "continent": "EU",
    "iso_country": "AD",
    "wikipedia_link": "https://en.wikipedia.org/wiki/Canillo",
    "keywords": "Airports in Canillo Parish"
  },
  ...
]
```

## Installation

Install the package using npm:

```bash
npm install airports-json
```

## Usage

After installing the package, you can import and use the datasets in your project like this:

```javascript
const { airports, regions, countries } = require("your-package-name");

// Use the datasets as needed
console.log(airports);
console.log(regions);
console.log(countries);
```

## Generating Datasets with Custom Airport Types

By default, the package includes data for medium and large airports. If you need to include other airport types or a custom set of types, you can generate the datasets with the --types flag followed by a comma-separated list of types.

First, clone the repository:

```bash
git clone https://github.com/JetSetExpert/airports.git
cd airports
```

Install the dependencies:

```bash
npm install
```

Generate the datasets with the desired airport types:

```bash
node src/generate.js --types small_airport,medium_airport,large_airport
```

Replace `small_airport,medium_airport,large_airport` with the desired types. Possible types are:

- balloonport
- closed
- heliport
- large_airport
- medium_airport
- seaplane_base
- small_airport

## Links & Resources

[Jet Set Expert](https://jetsetexpert.com)
[airports-json on GitHub](https://github.com/jetsetexpert/airports)
[airports-json on NPM](https://www.npmjs.com/package/airports-json)
[airports-json on Aliyun](https://developer.aliyun.com/mirror/npm/package/airports-json)
[airports-json on TAONPM](https://npmmirror.com/package/airports-json)
[airports-json on jsDlivr](https://www.jsdelivr.com/package/npm/airports-json)
[airports-json on Snyk](https://snyk.io/advisor/npm-package/airports-json)
[airports-json on Libraries.io](https://libraries.io/npm/airports-json)
[airports-json on RunKit](https://npm.runkit.com/airports-json)
[airports-json on npm trends](https://www.npmtrends.com/airports-json)
[airports-json on Package Phobia](https://packagephobia.com/result?p=airports-json)
[airports-json on Skypack](https://www.skypack.dev/view/airports-json)
[airports-json on CNPM](https://cnpmjs.org/package/airports-json)
[airports-json on githubmemory](https://githubmemory.com/repo/javascriptutils/airports-json)
[airports-json on npm.io](https://npm.io/package/airports-json)
[airports-json on Pkg Stats](https://www.pkgstats.com/pkg:airports-json)
