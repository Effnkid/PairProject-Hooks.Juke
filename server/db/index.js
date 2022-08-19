const db = require('./db');
// require each of your models here...
const Album = require('./album');
const Song = require('./song');
const Artist = require('./artist');
// ...and give them some nice associations here!

Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Artist);
Artist.hasMany(Song);

Song.belongsTo(Album);
Album.hasMany(Song);

module.exports = {
	db,
	Album,
	Song,
	Artist,
	// Include your models in your module.exports as well!
	// The seed file expects to find them there!
};
