const { SiteTourist, Category } = require("../models");

const groupingCategories = async () => {
  const allDataSiteCategories = await Category.findAll({
    attributes: ["nameCategory", "SitesId"],
  });
  return allDataSiteCategories;
};

module.exports = { groupingCategories };
