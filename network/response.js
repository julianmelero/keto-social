exports.succes = function (req, res, msg, status) {
  let statusCode = status || 200;
  let statusMsg = msg || '';
  res.status(statusCode).send({
    error: false,
    status: statusMsg,
    body: msg,
  });
};

exports.error = function (req, res, msg, status) {
  let statusCode = status || 500;
  let statusMsg = msg || 'Internal server error';
  res.status(statusCode).send({
    error: true,
    status: statusMsg,
    body: msg,
  });
};
