const { resolve } = require("path");
const fs = require('fs-extra');
const { sync } = require("glob");

try {
    fs.copy(
        resolve(__dirname + '/../src/style.scss'),
        resolve(__dirname + '/../lib/style.scss')
    )
    const scssFile = sync(resolve(__dirname + '/../src/style/**.scss'), { nodir: false });
    scssFile.forEach(element => {
        fs.copy(
            element,
            resolve(`${__dirname}/../lib/style/${element.match(/\/style\/(\S*)/)[1]}`)
        )
    });
    const scssList = sync(resolve(__dirname + '/../src/packages/**/index.scss'), { nodir: false });
    scssList.forEach(element => {
        fs.copy(
            element,
            resolve(`${__dirname}/../lib/packages/${element.match(/\/packages\/(\S*)\/index.scss/)[1]}/index.scss`)
        )
    });
    console.log("scss---------------copy");
} catch (error) {
    throw error
}