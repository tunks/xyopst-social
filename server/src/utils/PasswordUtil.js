const bcrypt = require("bcrypt")
const SALT_ROUNDS = 10;

exports.encryptPassword= async (password) => {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

exports.comparePasswords= async (password, encryptedPassword) => {
    return await bcrypt.compare(password,encryptedPassword)
}