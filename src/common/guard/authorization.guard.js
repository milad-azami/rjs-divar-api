const createHttpError = require("http-errors");
const AuthorizationMessage = require("../messages/auth.message");
const jwt = require("jsonwebtoken");
const UserModel = require("../../modules/user/user.model");
const {RefreshToken} = require("../constant/cookie.enum");
require("dotenv").config();
const Authorization = async (req, res, next) => {
    try {
        const {authorization} = req?.headers;
        if (!authorization) throw new createHttpError.Unauthorized(AuthorizationMessage.Login);
        const [bearer, token] = authorization?.split(" ");
        if (!token) throw new createHttpError.Unauthorized(AuthorizationMessage.Login);
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (typeof data === "object" && "id" in data) {
            const user = await UserModel.findById(data.id, {accessToken: 0, otp: 0, __v: 0, updatedAt: 0, verifiedMobile: 0, refreshToken: 0}).lean();
            if (!user) throw new createHttpError.Unauthorized(AuthorizationMessage.NotFoundAccount);
            req.user = user;
            return next();
        }
        throw new createHttpError.Unauthorized(AuthorizationMessage.InvalidToken);
    } catch (error) {
        next(error);
    }
};
module.exports = Authorization;