'use strict';

const authorize = require('../middleware/authorize');
const getPastesByUser = require('../db/get-pastes-by-user');


module.exports = function userPastesPageRoute({ router, db }) {
  router.get('/paste', authorize, async (req, res, next) => getPastesByUser(db, req.session.uid)
    .then((pastes) => {
      res.locals.pastes = pastes;
      next();
    })
    .catch(next));
};