const responseFormatter = require("../helper/response.formatter");
const {
  getDataAllSiteTouris,
  querySearch,
  getSearchDataAllSiteTouris,
} = require("../services/siteTourist.service");
const { Op, where } = require("sequelize");

class SiteTourists {
  static async getSiteTouristAll(req, res, next) {
    try {
      const getDataSites = await getDataAllSiteTouris();
      return responseFormatter.successSites(
        res,
        false,
        200,
        "Get All Data Tourist Site",
        getDataSites
      );
    } catch (err) {
      next(err);
    }
  }
  static async getSearchSiteTouristAll(req, res, next) {
    try {
      const searchTerm = req.query.search;
      let result = {};
      if (searchTerm) {
        result = await querySearch(searchTerm);
      } else {
        result = await getDataAllSiteTouris();
      }
      return responseFormatter.successSites(
        res,
        false,
        200,
        "Get Data Tourist Site",
        result
      );
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SiteTourists;
