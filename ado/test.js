"use strict";
exports.__esModule = true;
var connection_1 = require("./connection");
var path_1 = require("path");
var dotenv_1 = require("dotenv");
dotenv_1.config({ path: path_1.resolve(__dirname, "../.env.ado") });
var queryHelper = new connection_1.QueryHelper(process.env.ADO_TOKEN, "CSEng");
// queryHelper.getField("CSEIndustry").then(function(result){
//     console.log(result);
// });
// queryHelper.loadParticipantByIndustry('Manufacturing & Resources', '7/1/2019', '7/10/2019').then(function(result){
//         //console.log(result);
//     });
queryHelper.getWorkItems([225515]).then(function (result) {
    console.log(result);
});
