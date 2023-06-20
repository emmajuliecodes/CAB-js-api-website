// FETCHING THE DATA

const fetchData = () => {
	const url = `https://restcountries.com/v3.1/all`;
	fetch(url)
		.then((response) => {
			return response.json();
		})
		// TODO: Learn why this .then is not retrieving and calling controller with the request API data. Result is undefined.
		.then((result) => {
			const countriesData = result;
			controller(countriesData);
		})
		.catch((error) => {
			console.log("error>>>>", error);
		});
};

// ACCESSING A DATA FIELD (also specified in loop so not needed here)
// let firstCountryObject= data[0];s
// let countryName = firstCountryObject.name.common;

// ASSIGNING LENGTH FOR LOOP
// let countriesCount = countriesData.length;


//  CREATING LOOP & BUILDING TABLE (within a function)

const createHtmlTable = (countriesData) => {
    let countryCount = countriesData.length;

		let myTable = document.getElementById("countriesTable");

		myTable.innerText = "";
		countriesData.forEach((country, i) => {
			const tr = document.createElement("tr");

			//     // If creating header here rather than appending to table in html doc
			//     // const createTHead(myData);
			//     // const row = header.insertRow (0);
			//     // clearInterval.innerHTML ="<b>Countries</ b>"

			const tdCountry = document.createElement("td");
			tdCountry.innerText = countriesData[i].name.common;

			const tdCapital = document.createElement("td");
			tdCapital.innerText = countriesData[i].capital;

			const tdContinent = document.createElement("td");
			tdContinent.innerText = countriesData[i].continents;

			const tdFlag = document.createElement("td");
			tdFlag.innerText = countriesData[i].flag;

			myTable.appendChild(tr);
			tr.appendChild(tdCountry);
			tr.appendChild(tdCapital);
			tr.appendChild(tdContinent);
			tr.appendChild(tdFlag);
		});
	}
// };

// CREATING DROPDOWN

createContinentDropDown = (countriesData) => {
    const dropdown = document.getElementById("continentDropdown");
    
    const continentsArray = countriesData.map ((country) => {
        return countriesData.continent;
        console.log(continentsArray);
    });
}

// createHtmlTable(countriesDat <a);

// FUNCTION CONTROLLER

const controller = (countriesData) => {
	console.log("in controller", countriesData);
	createHtmlTable(countriesData);
    createContinentDropdown(countriesData); 
};

fetchData();
