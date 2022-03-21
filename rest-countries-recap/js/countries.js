const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    const countriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(countriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}
const getCountryHtml = country => {
    return `
        <div class="country">
            <h1>${country.name}</h1>
            <img src="${country.flags.png}">
        </div>`
}