// need to disableno-unused-vars for eslint because express
// detects error handlers middlewares with function arity
/*eslint no-unused-vars: 0*/

module.exports = function errorMiddleware(err, req, res, next) {
  var log = req.log;

  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });

  log.error(err, err.message);
};
