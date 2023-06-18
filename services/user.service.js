const { User } = require("../models");

const getUserBy = async where => {
  const user = await User.findOne({
    where,
    attributes: ["namalengkap", "profile"],
  }).catch(err => console.log(err));
  return user;
};

const getDataUser = async where => {
  return await User.findOne({ where });
};
const getDestroy = async where => {
  return await User.destroy({ where });
};

const createUser = async form => {
  return await User.create(form);
};

const updateUser = async (form, where) => {
  return await User.update(form, { where });
};

module.exports = {
  getUserBy,
  getDataUser,
  createUser,
  updateUser,
  getDestroy,
};
