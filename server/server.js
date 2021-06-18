const
	path		= require('path'),
	express = require('express'),
	app			= express(),
	pubPath = path.resolve(__dirname, '..', 'dist'),
	PORT		= process.env.PORT || 3000;

app.use(express.static(pubPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(pubPath, 'index.html'));
});

app.listen(PORT, () => {});