const currentdate = new Date();

const date =
  currentdate.getFullYear() +
  "-" +
  (currentdate.getMonth() + 1) +
  "-" +
  currentdate.getDate();

const tomorrow =
  currentdate.getFullYear() +
  "-" +
  (currentdate.getMonth() + 1) +
  "-" +
  (currentdate.getDate() + 1);

const naarWerk = document.getElementById("naarWerk");
const naarHuis = document.getElementById("naarHuis");
const naarWerkMorgen = document.getElementById("naarWerkMorgen");

const time = currentdate.getHours() + 1 + ":" + currentdate.getMinutes();

naarWerk.setAttribute(
  "href",
  `https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}`
);

naarHuis.setAttribute(
  "href",
  `https://www.ns.nl/reisplanner/#/?vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}`
);

naarWerkMorgen.setAttribute(
  "href",
  `https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${tomorrow}T09:00`
);
