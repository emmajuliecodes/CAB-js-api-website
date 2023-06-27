// FETCHING THE DATA

const fetchData = () => {
	const url = `https://restcountries.com/v3.1/all`;
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			const unsortedCountriesData = result;
			controller(countriesData);
		})
		.catch((error) => {
			console.log("error>>>>", error);
		});
};

const countriesData = unsortedCountriesData.sort((a, b) => {
	if (
		unsortedCountriesData.countries.name.common(a) <
		unsortedCountriesData.countries.name.common(b)
	) {
		return -1;
	}
	if (
		unsortedCountriesData.countries.name.common(a) >
		unsortedCountriesData.countries.name.common(b)
	) {
		return -1;
	}

	return 0;
});

console.log(countriesData);

//  CREATING LOOP & BUILDING TABLE (within a function)

const createHtmlTable = (countriesData) => {
	let myTable = document.getElementById("countriesTable");

	myTable.innerText = "";

	countriesData.forEach((country, i) => {
		const tr = document.createElement("tr");

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
};

// CREATING DROPDOWN

createContinentDropdown = (countriesData) => {
	const dropdown = document.getElementById("continentDropdown");

	// ADD TO.STRING TO ACCOUNT FOR CONTINENT NAME NOT BEING OBJECT IN CONTINENTS
	const continentsArray = countriesData.map((country) => {
		return country.continents.toString();
	});

	console.log(continentsArray);

	const uniqueContinentsArray = [...new Set(continentsArray)];
	console.log(uniqueContinentsArray);

	uniqueContinentsArray.forEach((continent) => {
		const dropdownOption = document.createElement("option");
		dropdownOption.innerText = continent;
		dropdown.appendChild(dropdownOption);
	});
};

// ADDING EVENT LISTENERS

const setEventListeners = (countriesData) => {
	document
		.querySelector("#continentDropdown")
		.addEventListener("change", () => {
			filterByContinentDropdown(countriesData);
		});
	document.querySelector("#independenceQuery").addEventListener("click", () => {
		filterByIndependenceCheckbox(countriesData);
	});
};

// FILTER BY DROPDOWN

const filterByContinentDropdown = (countriesData) => {
	const selectedContinent = document.querySelector("#continentDropdown").value;

	const filteredByContinent = countriesData.filter((country, i) => {
		return (
			countriesData[i].continents.toString() === selectedContinent ||
			selectedContinent === "all"
		);
	});

	createHtmlTable(filteredByContinent);
};

// FILTER BY INDEPENDENCE CHECKBOX

const filterByIndependenceCheckbox = (countriesData) => {
	const independentChecked = document.getElementById("independenceQuery");

	const independentCountries = countriesData.filter((countries, i) => {
		return countriesData[i].independent === true;
	});

	if (independentChecked.checked == true) {
		createHtmlTable(independentCountries);
	} else if (independentChecked.checked == false) {
		createHtmlTable(countriesData);
	}
};

// // // COMBINING FILTERS
// const combinedFilters = (countriesData) => {
// 	let filteredData = [...countriesData];
// 	if (filteredByContinent > 0)

// };

// FUNCTION CONTROLLER

const controller = (countriesData) => {
	// console.log("in controller", countriesData);
	createHtmlTable(countriesData);
	createContinentDropdown(countriesData);
	setEventListeners(countriesData);
	filterByContinentDropdown(countriesData);
	filterByIndependenceCheckbox(countriesData);
};

fetchData();
