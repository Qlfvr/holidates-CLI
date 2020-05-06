#!/usr/bin/env node



// import method from country-list
const {
    getCode,
    getName
} = require('country-list');

const axios = require('axios').default;



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
            console.log(error);
        })
        .finally(function () {
            // always executed
        });


}

myNodeCLITool("Belgium")



// today = new Date()
// year = today.getFullYear()
// countryCode = getCode("belgium")


// // Make a request for a user with a given ID
// axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed
//     });