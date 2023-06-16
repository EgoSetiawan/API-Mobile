const responseFormatter = require("./response.formatter");
module.exports = async (err, req, res, next) => {
  console.log(err);
  if (!err.code) {
    return responseFormatter.InternalServerError(res);
  }
  res
    .status(err.code)
    .json({
      error: err.error,
      code: err.code,
      status: err.status,
      message: err.message,
    });
};
