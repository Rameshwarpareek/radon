function printdate() {
    console.log("Today is 3");

}

function printmonth() {
    console.log(" may 2022 ");

}

function getBatchInfo() {
    console.log("radon, W3D3, the topic for today is Nodejs module system");

}
module.exports.date = printdate;
module.exports.month = printmonth;
module.exports.batchinfo = getBatchInfo;