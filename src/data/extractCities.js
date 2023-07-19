const fs = require('fs');

// Create cities list from city.list.json

fs.readFile('city.list.json', 'utf8', (err, data) => {
  if (err) {
    console.warn('Error reading', err);
    return;
  }

  const citiesJson = JSON.parse(data);

  const cityNames = citiesJson.map(city => city.name);

  const cityNamesJson = JSON.stringify(cityNames, null, 2);

  fs.writeFile('cityNames.json', cityNamesJson, 'utf8', err => {
    if (err) {
      console.warn('Error writing to file:', err);
      return;
    }
    console.warn('cityNames.json Success');
  });
});
