console.log('data',data)
let myFirstCountryObject = data[0];
let myFirstCountryName = myFirstCountryObject.name.common;
let countriesCount = data.length;


let repMali = data[9];

console.log('country 0', myFirstCountryObject);
console.log('repMali',repMali);
console.log('myCountryName',myFirstCountryName);
console.log('countriesCount',countriesCount);


let myContainer= document.getElementById('container');
let myFirstElement = document.createElement('h1');
myFirstElement.innerHTML=(myFirstCountryName);
myContainer.appendChild(myFirstElement);


for (let i = 0; i < countriesCount; i++) {
    let nextCountry = data[i];
    let thisCountryName = nextCountry.name.common;
    console.log(nextCountry);
    let myElement = document.createElement('h6');
    myElement.innerText=(thisCountryName);
    myContainer.appendChild(myElement);

}