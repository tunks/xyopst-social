const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')
const DataUtil = require('./DataUtil')
const JWT_SECRET_KEY = "xDFSD23SXJLeQAKXASDCLWIDASZA7XM"

exports.generateToken = async (data) => {
    return await jwt.sign(data, JWT_SECRET_KEY);
}

exports.validateToken= async(token) => {
    try {  
        const data = await jwt.verify(token, JWT_SECRET_KEY);
        if(data){
           const currentDate = await DataUtil.currentDateTime()
           console.log(data)
           console.log("current date -- validate token: "+currentDate);
           return data.expiredDate >= currentDate;
        }
        else{
           return false
        }
    } catch (error) {
        console.error(error)
        return false
    }
}