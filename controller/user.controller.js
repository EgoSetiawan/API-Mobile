const {
  getUserBy,
  createUser,
  getDataUser,
  updateUser,
  getDestroy,
} = require("../services/user.service");
const fs = require("fs");
const cloudinary = require("../helper/cloudinary.helper");
const bcrypt = require("bcryptjs");
const responseFormatter = require("../helper/response.formatter");

class UserControll {
  static async register(req, res, next) {
    try {
      const checkUser = await getUserBy({ email: req.body.email });
      if (checkUser) {
        throw {
          error: true,
          code: 409,
          message: "Email sudah digunakan",
        };
      }
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(req.body.password, salt);
      req.body.password = hashedPassword;
      req.body.namalengkap = req.body.namalengkap;
      req.body.profile =
        "https://res.cloudinary.com/dje4rhwj0/image/upload/v1686632889/profile/sbcf-default-avatar_hzw0pj.png";
      const newUser = await createUser(req.body);
      return responseFormatter.successLogin(res, false, 201, "Sudah Mendaftar");
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const user = await getDataUser({ email: req.body.email });
      if (!user) {
        throw {
          error: true,
          code: 401,
          message: "Tidak ada email pasti nipu",
        };
      }

      if (!bcrypt.compareSync(req.body.password, user.password)) {
        throw {
          error: true,
          code: 401,
          message: "Tidak ada password pasti nipu",
        };
      }

      const userId = user.id;

      console.log(userId);

      return responseFormatter.successLogin(
        res,
        false,
        201,
        "anda sudah login",
        {
          userId,
        }
      );
    } catch (error) {
      next(error);
    }
  }
  static async getDataById(req, res, next) {
    try {
      const getUserProfile = await getUserBy({ id: req.params.id });
      responseFormatter.successLogin(
        res,
        true,
        200,
        "Get Data Id",
        getUserProfile
      );
    } catch (error) {
      next(error);
    }
  }
  static async DestroyUser(req, res, next) {
    try {
      const DestroysUser = await getDestroy({ id: req.params.id });
      responseFormatter.successLogin(res, true, 200, "Delete account", {
        DestroysUser,
      });
    } catch (error) {
      next(error);
    }
  }
  static async UpdateUsers(req, res, next) {
    try {
      if (req.file) {
        const public_id = `profile/${req.file.filename}`;
        const cdn = await cloudinary.uploader.upload(req.file.path, {
          public_id,
        });
        req.body.profile = cdn.secure_url;
        console.log(req.body.profile);
        fs.unlinkSync(req.file.path);
      }
      const result = await updateUser(
        {
          namalengkap: req.body.namalengkap,
          profile: req.body.profile,
        },
        {
          id: req.params.id,
        }
      );
      console.log(result);
      responseFormatter.successLogin(res, true, 200, "User Updated");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserControll;
