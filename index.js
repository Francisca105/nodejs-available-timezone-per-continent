// Check readme.md file

let output = 'array'; // array | string
let Continent = 'Europe'; // Change for the continent you want to check the available timezones

/* ↓ Don't change the code if you don't know what you are doing ↓ */

let Timezones = CheckTimeZones(Continent);

switch (output) {
  case 'string':
    Timezones.map((t) => console.log(t));
    return;
  case 'array':
    console.log(Timezones);
    return;
}

function CheckTimeZones(Continent) {
  return Intl.supportedValuesOf('timeZone').filter((string) =>
    string.startsWith(Continent)
  );
}
