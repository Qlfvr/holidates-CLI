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
        let array = data.map(({value}) => value.toUpperCase());
        return array;

    } catch (error) {
        console.log(error);
    }
}

function getHolidays(country, year, spinner) {


    if (year === undefined) {
        let today = new Date()
        year = today.getFullYear()
    }

    countryCode = getCode(country)

    // Make a request for a user with a given ID
    axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
        .then(function (response) {
            // handle success
            console.log("\n");

            console.log(boxen(chalk.bold(`Holliday in ${year} in ${country} are : `), {
                padding: 1,
                borderStyle: 'round'
            }));
            const dataSet = response.data
            dataSet.forEach(data => {
                date = new Date(data.date);
                console.log(chalk.bold(data.name) + " : " + date.toLocaleDateString("fr-FR") + " \n ");
            });
        })
        .catch(function (error) {
            // handle error
            console.log("error");
        })
        .finally(function () {
            spinner.stop();
        });
}

(async () => {
    const countries = await getCountries();
    let arg = "";

    if (process.argv[2] !== undefined) {
        arg = process.argv[2].toUpperCase();
    }

    if (countries.includes(arg)) {
        const spinner = ora('Loading holidays...')
        spinner.start()
        setTimeout(() => {
            getHolidays(arg, process.argv[3] ,spinner)
        }, 1000); // wait to show spinner
    } else if (process.argv[2] === "ls") {
        countries.forEach(country => {
            console.log(country);
        });
    } else {
        console.log(chalk.red("\nERROR : You need to enter a valid country name") + `\nEnter ${chalk.blue("holidates ls")} to see the list of available countries.\n`);

    }
})();