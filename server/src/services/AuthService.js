const UserService = require('./UserService')
const PasswordUtil = require('../utils/PasswordUtil');
const MailService = require('./MailService')
const TokenUtil = require('../utils/JwtTokenUtil')
const DataUtil = require('../utils/DataUtil')


exports.findAllUsers= async () => {
    return await UserService.findAllUsers()
};
 
exports.authenticateUser= async (email, password) => {
    const user = await UserService.findByEmail(email)
    if(user){
       console.log(user)
       const encryptedPassword = user.account.password;
       console.log("login.encryptedPassword: "+encryptedPassword);
       const valid = await PasswordUtil.comparePasswords(password,encryptedPassword);
       console.log("login.encryptedPassword-> valid "+valid);
       return (valid)? user: null;
    }
    return null
};
   
exports.registerUser= async (data) => {
    console.log("Register user: ");
    console.log(data);
     let existingUser = await UserService.findByEmail(data.username);
     if(existingUser != null){
        console.log(" createUser.existingUser: "+existingUser);
     }
     else{
        let encryptedPassword = await PasswordUtil.encryptPassword(data.password);
        console.log(" createdUser.encryptedPassword: "+encryptedPassword);
        let user = {profile: {firstname: data.firstname,
                              lastname: data.lastname,
                              gender: data.gender},
                     account: {email: data.username,
                               password: encryptedPassword}};
         console.log(user);
         const registeredUser = await UserService.createUser(user);
         if(registeredUser != null){
            const currentDate = await DataUtil.currentDateTime()
            const userData = {id: registeredUser._id, 
                              profile: user.profile, 
                              email: user.account.email, 
                              createdDate: currentDate,
                              expiredDate: expireDateTime()}
            const token = await TokenUtil.generateToken(userData)
            const content = DataUtil.confirmationMessage(token)
            const message = {to: user.account.email,
                             subject: "XyOPST - Activate your registration!",
                             content: content
                            }
            MailService.sendMail(message)
         }
         return registeredUser;
    }
};

expireDateTime = ()=>{
    const expireDate = new Date()
    expireDate.setMinutes(expireDate.getMinutes() + 15);
    return expireDate.getTime()
};
exports.getUserById = async (id) => {
    return await UserModel.findById(id);
};
   
exports.updateUser = async (id, post) => {
    return await UserModel.findByIdAndUpdate(id, post);
};

exports.verifyUser = async (id, post) => {
    return await UserModel.findByIdAndUpdate(id, post);
};

exports.deleteUser = async (id) => {
    return await UserModel.findByIdAndDelete(id);
};