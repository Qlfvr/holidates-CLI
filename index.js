#!/usr/bin/env node
 // import dependencies
 const {getCode} = require('country-list');
 const axios = require('axios').default;
 const ora = require('ora');
 const boxen = require('boxen');
 const chalk = require("chalk");

async function getCountries() {
    try {
        let {data} = await axios.get(`https://date.nager.at/Api/v2/AvailableCountries`);
        let array = data.map(({value}) => value.toLowerCase());
        return array;

    } catch (error) {
        console.log(error);
    }
}



console.log(supportedCountries);






function myNodeCLITool(country) {

    today = new Date()
    year = today.getFullYear()
    countryCode = getCode(country)

    // Make a request for a user with a given ID
    axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
        .then(function (response) {
            // handle success

            console.log(`\n
            *******************************************
            The Holliday for this year in ${country} are : 
            *******************************************
            \n
            `);
            const dataSet = response.data
            dataSet.forEach(data => {
                date = new Date(data.date);
                console.log(data.name + " : " + date.toLocaleDateString("fr-FR") + " \n ");
            });
        })
        .catch(function (error) {
            // handle error
            console.log("error");
        })
        .finally(function () {
            // always executed
        });
}

if ((process.argv[2]) !== undefined) {
    myNodeCLITool(process.argv[2])
} else {
    console.log("You need to enter a valid country name");
}




// console.log(countries);