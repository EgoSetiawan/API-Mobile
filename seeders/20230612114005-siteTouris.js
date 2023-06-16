"use strict";
const fs = require("fs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = JSON.parse(fs.readFileSync("seeders/data/siteTouris.json"));
    const siteTouristsData = data.map(element => {
      return {
        touristSitesId: element.touristSitesId,
        touristSitesName: element.touristSitesName,
        touristSitesDescription: element.touristSitesDescription,
        photo_url: element.photo_url,
        category: element.category,
        lan: element.lan,
        lon: element.lon,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("SiteTourists", siteTouristsData);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SiteTourists", null, {
      truncate: true,
      restartIdentity: true,
    });
  },
};
