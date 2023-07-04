// FETCHING THE DATA
const fetchData = () => {
	const url = `https://restcountries.com/v3.1/all`;
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((result) => {
			const unsortedCountriesData = result;
			const countriesData = unsortedCountriesData.sort((a, b) => {
				console.log(unsortedCountriesData);
				if (a.name.common < b.name.common) {
					return -1;
				}
				if (a.name.common > b.name.common) {
					return 1;
				}

				return 0;
			});
			controller(countriesData);
		})
		.catch((error) => {
			console.log("error>>>>", error);
		});
};

//  CREATING LOOP & BUILDING TABLE (within a function)

const createHtmlTable = (countriesData) => {
	// let myTable = document.getElementById("countriesTable");

	let tableBody = document.getElementById("tableBody");

	// LINE BELOW CLEANS TABLE

	tableBody.innerText = "";

	tableHead = document.getElementById("tableHeader");

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

		tableBody.appendChild(tr);
		tr.appendChild(tdCountry);
		tr.appendChild(tdCapital);
		tr.appendChild(tdContinent);
		tr.appendChild(tdFlag);
	});
};

// CREATING DROPDOWN

const createContinentDropdown = (countriesData) => {
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
			console.log("event listener is called");
			filteredCountries(countriesData);
		});
	document.querySelector("#independenceQuery").addEventListener("click", () => {
		filteredCountries(countriesData);
	});
};

// ADDING FILTERS - DROPDOWN & CHECKBOX

const isCorrectContinent = (country, selectedContinent) => {
	if (country.continents.toString() === selectedContinent) {
		console.log("country is ", country);
		console.log("selected is ", selectedContinent);
	}

	return (
		country.continents.toString() === selectedContinent ||
		selectedContinent === "all"
	);
};
const isIndependent = (country, independenceCheck) => {
	return !independenceCheck || country.independent;
};

const filteredCountries = (countriesData) => {
	const independenceCheck =
		document.getElementById("independenceQuery").checked;
	const selectedContinent = document.getElementById("continentDropdown").value;
	console.log("in filtered countries");

	const filteredCountries = countriesData.filter((country) => {
		return (
			isCorrectContinent(country, selectedContinent) &&
			isIndependent(country, independenceCheck)
		);
	});

	createHtmlTable(filteredCountries);
};

// BUILDING SEARCH BAR

const searchBar = () => {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("countriesTable");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = none;
			}
		}
	}
};

// FUNCTION CONTROLLER

const controller = (countriesData) => {
	createHtmlTable(countriesData);
	createContinentDropdown(countriesData);
	setEventListeners(countriesData);
	filteredCountries(countriesData);
	searchBar(countriesData);
};

fetchData();
