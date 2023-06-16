const { SiteTourist } = require("../models");
const { Op } = require("sequelize");

const getDataAllSiteTouris = async () => {
  const allDataSite = await SiteTourist.findAll({
    attributes: [
      "touristSitesId",
      "touristSitesName",
      "touristSitesDescription",
      "photo_url",
      "category",
      "lan",
      "lon",
    ],
  });
  return allDataSite;
};
const getSearchDataAllSiteTouris = async () => {
  const allDataSite = await SiteTourist.findAll({
    where: {
      touristSitesName: {
        [Op.iLike]: "%Jember%",
      },
    },
    attributes: [
      "touristSitesId",
      "touristSitesName",
      "touristSitesDescription",
      "photo_url",
      "category",
      "lan",
      "lon",
    ],
  });
  return allDataSite;
};
const querySearch = async searchTerm => {
  const allDataSite = await SiteTourist.findAll({
    order: [["id", "ASC"]],
    where: {
      touristSitesName: {
        [Op.iLike]: `%${searchTerm}%`,
      },
    },
    attributes: [
      "touristSitesId",
      "touristSitesName",
      "touristSitesDescription",
      "photo_url",
      "category",
      "lan",
      "lon",
    ],
  });
  return allDataSite;
};

module.exports = {
  getDataAllSiteTouris,
  getSearchDataAllSiteTouris,
  querySearch,
};
