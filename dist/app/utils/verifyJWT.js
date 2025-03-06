"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../error/AppError"));
// _id: user?._id,
//     name: user?.name,
//     email: user.email,
//     mobileNumber: user.mobileNumber,
//     role: user.role,
//     status: user.status,
const createToken = (jwtPayload, secret, expiresIn) => {
    return jsonwebtoken_1.default.sign(jwtPayload, secret, {
        expiresIn: "30d",
    });
};
exports.createToken = createToken;
const verifyToken = (token, secret) => {
    try {
        const verify = jsonwebtoken_1.default.verify(token, secret);
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        throw new AppError_1.default(401, 'You are not authorized!');
    }
};
exports.verifyToken = verifyToken;
