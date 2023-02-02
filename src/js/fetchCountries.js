const baseUrl = 'https://restcountries.com/v3.1/name/';
const countriesInfo = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${baseUrl}${name}?${countriesInfo}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
