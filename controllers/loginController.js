const loginController = {};

loginController.loginUser = (req, res) => {
	const user = 'alumno';
	const pass = 'codehouse';

	if (req && req.body) {
		if (req.body.user === user && req.body.pass === pass) {
			res.status(200).json({
				nombre: 'Usuario 1',
				apellidos: 'CodeHousers',
				token: 'XXXXXXX CHORIZO xxxxxxxxxxx',
			});
		}
	}

	res.status(401).send('Unathorized');
};


module.exports = loginController;