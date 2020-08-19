module.exports = (req, res, next) => {
  const { method, url } = req;
  const logLabel = `${method.toUpperCase()} ${url}`;
  console.log(logLabel);

  return next();
};
