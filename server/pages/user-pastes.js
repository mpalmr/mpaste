'use strict';

const getPastesByUser = require('../db/get-pastes-by-user');
const getUserById = require('../db/get-user-by-id');


module.exports = function userPastesPageRoute({ router, db }) {
  router.get('/user/:id/pastes', async (req, res, next) => Promise.all([
    getPastesByUser(db, req.params.id),
    getUserById(db, req.params.id),
  ])
    .then(([pastes, user]) => {
      console.log(arguments);
      res.locals = {
        pastes,
        userId: user.id,
        userEmail: user.email,
      };
      next();
    })
    .catch(next));
};
