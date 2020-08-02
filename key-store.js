const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs = require('fs');
const os = require('os'); 
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

module.exports = function (req, res) {

    console.log('Inside Key Store');

    let apikey = createUUID();

    console.log(apikey);

    fs.writeFile('valid-keys.txt', apikey, {'flag':'a'}, function (err) {
        if (err) return console.log(err);
    });
    fs.writeFile('valid-keys.txt', os.EOL, {'flag':'a'}, function (err) {
        if (err) return console.log(err);
    })

    res.status(201).send({
        "apiKey": apikey
    });
};

