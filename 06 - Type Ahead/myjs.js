
// this is an API with data about states, cities...
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// preparing an array to store all data from the API
const cities = [];

// "scrapping" the API or rather fetching
fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

// bulding a function to look inside the array for all the cities matching user keying
function getCities(userSearch, cities) { // arguments are user input and cities array
  return cities.filter(place => { // filtering the array need to return here
    const regex = new RegExp(userSearch, 'gi'); // find where ever it will match with Regex
    return place.city.match(regex)}); // matching the regex and city name (includes doesn't work) need to return here too
}


function display() {
  const findings = getCities(this.value, cities);
  // console.log(findings);
  const html = findings.map(place => {
    const regex = new RegExp(this.value, 'gi'); // find matching with what user is keying in order to highlight it
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`) // replace what user is keying by a highlight see first span
    return `
    <li>
      <span class="name">${cityName}</span>
      <span class="name">${place.population}</span>
    </li>
    `;
  }).join(''); // carefull map return an array we want a string
  suggestions.innerHTML= html; // inserting the new html in the proper place of our html
}

const searchValue = document.querySelector('.search'); // getting the user input
const suggestions = document.querySelector('.suggestions'); // getting the place to place the answer
// console.log(suggestions);

searchValue.addEventListener('keyup', display); // calling everything on the event keyup
