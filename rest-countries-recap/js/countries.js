const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = countries => {
    console.log(countries);
    const countriesHtml = countries.map(country => getCountryHtml(country));
    // console.log(countriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHtml.join(' ');
}

// original 
// const getCountryHtml = country => {
//     return `
//         <div class="country">
//             <h1>${country.name}</h1>
//             <img src="${country.flags.png}">
//         </div>`
// }

// option 1
// const getCountryHtml = country => {
//     const { name, flags} = country;
//     return `
//     <div class="country">
//         <h1>${name}</h1>
//         <img src="${flags.png}">
//     </div>
//     `
// }

// option 2
const getCountryHtml = ({name,capital,subregion,demonym,flags}) =>{
    return `
        <div class="country">
            <h1>${name}</h1>
            <h3>Capital: <span>${capital}</span></h3>
            <h4>Subregion: <span>${subregion}</span></h4>
            <h4>Nationality: <span>${demonym}</span></h4>
            <img src="${flags.png}">
        </div>   
    `
}