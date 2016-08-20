// need to disableno-unused-vars for eslint because express
// detects error handlers middlewares with function arity
/*eslint no-unused-vars: 0*/

module.exports = function notFound(req, res, next) {
  var log = req.log;

  res.status(404);
  res.render('not-found');

  log.warn('Not found');
};
