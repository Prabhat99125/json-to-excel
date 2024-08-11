const fs = require("fs");
let data = [];
data.push({
    "name": "binod",
    "age": 18,
    "option": false,

    "city": "baroda",
    "pin": 380215,
    "houseNo.": 33,
    "frendName": "bhupendrJogi"
    },
    {
    "name": "vijay",
    "age": 20,
    "option": true,
    "city": "pune",
    "pin": 380010,
    "houseNo.": 41,
    "frendName": "bhupendrJogi"
    },
    {
    "name": "ketnat",
    "age": 18,
    "option": false,
    "city": "baroda",
    "pin": 380215,
    "houseNo.": 33,
    "frendName": "alvishbhaii"
    }
);

const xlsx = require("xlsx");
let newwb = xlsx.utils.book_new();
let newws = xlsx.utils.json_to_sheet(data);
xlsx.utils.book_append_sheet(newwb, newws, "sheet-1")
xlsx.writeFile(newwb, "prabhat.xlsx");