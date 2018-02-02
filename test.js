
var Ikea = require('node-tradfri-client');
var Path = require('path');

require('dotenv').config({path: Path.join(process.env.HOME, '.homebridge/.env')});


var Gateway = require('./src/gateway.js')
var ikea = new Gateway({"host": "gw-b8d7af2a9d45"});

gateway.connect().then(() => {

    console.log('Connected.');

    var device = ikea.gateway.devices[65562];
    console.log(device.id, device.name);

});
