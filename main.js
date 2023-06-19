// FETCHING THE DATA

const fetchData = () => {
	const url = `https://restcountries.com/v3.1/all`;
	fetch(url)
		.then((response) => {
			console.log("response", response);
			return response.json();
		})
		.then((result) => {
			console.log("Countries data", result);
            const countriesData = result.response;
			// controller(countriesData);
		})
		.catch((error) => {
			console.log("error>>>>", error);
		});
};



// ACCESSING A DATA FIELD (also specified in loop so not needed here)
// let firstCountryObject= data[0];s
// let countryName = firstCountryObject.name.common;

// let countryCapital = firstCountryObject.capital;
// console.log(countryCapital);

// ASSIGNING LENGTH FOR LOOP

// let countriesCount = countriesData.length;

//  CREATING LOOP & BUILDING TABLE (within a function)

const createHtmlTable = (countriesData) => {

    for (let i=0; i<countriesData; i++){


        let myTable= document.getElementById("countriesTable");

        // PRIORITY - FIX TABLE DISPLAY - NOT LOOPING THROUGH THE FETCH ARRAY
        
        // myTable.innerText = "";
        // countriesData.forEach(country,i) => {}
        // const tr= document.createElement("tr");

        //     // If creating header here rather than appending to table in html doc
        //     // const createTHead(myData);
        //     // const row = header.insertRow (0);
        //     // clearInterval.innerHTML ="<b>Countries</ b>"


        const tdCountry= document.createElement("td");
        tdCountry.innerText = countriesData[i].name.common;

        const tdCapital= document.createElement("td");
        tdCapital.innerText = countriesData[i].capital;

        const tdContinent= document.createElement("td");
        tdContinent.innerText = countriesData[i].continents;

        const tdFlag= document.createElement("td")
        tdFlag.innerText= countriesData[i].flag;

        myTable.appendChild(countriesTable);
        countriesTable.appendChild(tr);
        tr.appendChild (tdCountry);
        tr.appendChild (tdCapital);
        tr.appendChild (tdContinent);
        tr.appendChild (tdFlag);

    }
}

createHtmlTable(countriesData);

// // // FUNCTION CONTROLLER

function controller(countriesData) {
	createHtmlTable (countriesData);
}

// controller(countriesData[i]);
fetchData();
