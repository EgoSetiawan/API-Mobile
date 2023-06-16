class ResponseFormatter {
  static async InternalServerError(res) {
    res
      .status(500)
      .json({ error: true, code: 500, status: "Internal Server Error" });
  }

  static async successSites(res, error, code, message, touristSities) {
    console.log({ error, code, message, touristSities });
    return res.status(code).json({ error, code, message, touristSities });
  }
  static async successLogin(res, error, code, message, loginResult) {
    console.log({ error, code, message, loginResult });
    return res.status(code).json({ error, code, message, loginResult });
  }
}
module.exports = ResponseFormatter;
