var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');
var loginController = require('../controllers/loginController');
var ficherosController = require('../controllers/ficherosController');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send('Conectado a localhost:3000');
});

router.get('/coches/search', apiController.getListaCochesFiltrada);
router.get('/coches', apiController.getListaCoches);
router.get('/coches/:id', apiController.getCoche);

router.post('/coches', apiController.addCoche);
router.put('/coches/:id', apiController.updateCoche);
router.delete('/coches/:id', apiController.deleteCoche);

router.post('/login', loginController.loginUser);
router.post('/upload', ficherosController.upload);

module.exports = router;
