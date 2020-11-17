const express = require('express');
const controllers = require('./artists/controllers');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('hello from API');
});

//router.use('/albums', require('./albums'));
// router.('/artists', require('./artists'));
// router.use('/genres', require('./genres'));
// router.use('/media-types', require('./media-types'));
// router.use('/playlists', require('./playlists'));
// router.use('/tracks', require('./tracks'));

router.get('/artists/:id',controllers.getOne)

module.exports = router;
