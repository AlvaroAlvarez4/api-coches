var Busboy = require('busboy');
var path = require('path');
var fs = require('fs');

const ficherosController = {};

ficherosController.upload = (req, res) => {
	var busboy = new Busboy({ headers: req.headers });
	var fileType = req.query.type;

	busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
		let p = path.resolve(__dirname, '..');
		var uploadsPath = path.join(p, 'uploads/'+ fileType + '/' + filename);
		file.pipe(fs.createWriteStream(uploadsPath));
	});

	busboy.on('finish', function () {
		res.writeHead(200, { Connection: 'close' });
		res.end('true');
	});

	return req.pipe(busboy);
};

module.exports = ficherosController;
