
const TokenUtil = require('./JwtTokenUtil')
const ACTIVATION_LINK = "http://localhost:18080/confirmation?code="

exports.CONGRATULATIONS_MSG = "Congratulations, your account has been successfully created. Please check your email to active the registration."

exports.currentDateTime = async () =>{
    return Date.now()
}

exports.confirmationMessage = (token)=>{
    return "Your account is successfully created and registered. Please click on the link to activate your account "+
             ACTIVATION_LINK + ""+token  +" . </br> "
}

exports.loginUserData = async(user) =>{
  //                       username: "tunkara", 
  //                       accessToken: "12332434323242343", 
  //                       name: 'etunkara', 
  //                       roles: ['MODERATOR', 'ADMIN']};
  const fullname = user.profile.firstname
  const userData = {id: user._id, email: user.profile.email, roles: ['MODERATOR', 'ADMIN']};
  const accessToken = await TokenUtil.generateToken(userData)
  return {id: user._id,
          username: user.profile.email,
          username: fullname,
          roles: ['MODERATOR', 'ADMIN'],
          accessToken:  accessToken}
}