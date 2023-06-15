console.log(data);

let firstCountryObject= data[0];
console.log(firstCountryObject); 

// Accessing a data field (also specified in loop so not needed here)

// let countryName = firstCountryObject.name.common;
// console.log(countryName);

// let countryCapital = firstCountryObject.capital;
// console.log(countryCapital);

// Assigning the length for the loop
let countriesCount = data.length;

let myData= document.getElementById("api-data");




// Creating the loop for countries - using inline html
for (let i=0; i<countriesCount; i++){

    const tr= document.createElement("tr");

    const tdCountry= document.createElement("td"); 
    tdCountry.innerText = data[i].name.common;

    const tdCapital= document.createElement("td");
    tdCapital.innerText = data[i].capital;

    const tdContinent= document.createElement("td");
    tdContinent.innerText = data[i].continents;

    myData.appendChild(tr);
    tr.appendChild (tdCountry);
    tr.appendChild (tdCapital);
    tr.appendChild (tdContinent);

} 

