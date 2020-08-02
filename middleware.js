const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
fs = require('fs');


module.exports = function (req, res, next) {
    let apikey = req['x-api-key'];
    let keyindex = -1;

    fs.readFile(VALID_KEYS_PATH, 'utf8', function(err, data) {

        if (err) {
            return console.log(err);
        }

        console.log(data);

        keyindex = data.indexOf(apikey);
    });

    if (keyindex === -1) {
        res.status(401);
    }

    next();
};
