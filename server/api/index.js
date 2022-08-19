const router = require('express').Router();
const { Album, Song, Artist } = require('../db');
// connect your API routes here!

router.get('/albums', async (req, res, next) => {
	try {
		const all = await Album.findAll({ include: { model: Artist } });
		res.send(all);
	} catch (e) {
		next(e);
	}
});
router.get('/albums/:albumId', async (req, res, next) => {
	try {
		const all = await Album.findOne({
			where: {
				id: req.params.albumId,
			},
			include: {
				model: Artist,
				model: Song,
			},
		});
		res.send(all);
	} catch (e) {
		next(e);
	}
});

module.exports = router;
