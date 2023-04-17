const UserModel = require("../models/User");
//const AccountVerification = require("../models/AccountVerification");


exports.findAllUsers= async () => {
    return await UserModel.find().sort({'_id': -1});
};

exports.findByEmail = async (email) => {
    return await UserModel.findOne({"account.email": email})
};

exports.findByEmailAndPassword = async (email, encryptedPassword) => {
    return await UserModel.findOne({"account.email": email, 'account.password': encryptedPassword})
};

exports.existsByEmail= async (email) => {
    return await UserModel.exists({"account.email": email})
};

exports.createUser= async (user) => {
    console.log("Create user")
    return await UserModel.create(user);
};

exports.getUserProfile= async (userid) => {
    console.log("Create user")
    return await UserModel.create(post);
};

exports.getUserById = async (id) => {
    return await UserModel.findById(id);
};
   
exports.updateUser = async (id, user) => {
    return await UserModel.findByIdAndUpdate(id, user);
};

exports.verifyUser = async (id, user) => {
    return await UserModel.findByIdAndUpdate(id, user);
};

exports.deleteUser = async (id) => {
    return await UserModel.findByIdAndDelete(id);
};