const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
 console.log("Connect mongoose")
  await mongoose.connect('mongodb://127.0.0.1:27017/social_db');
}

const Schema = mongoose.Schema; 
const UserSchema = new Schema({
  profile: {
    firstname: String,
    lastname: String,
    gender: String
  },
  account: {
      email: String,
      password: String,
      active: Boolean,
      verified: Boolean
  },
  roles: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    default: Date.now,
  }
});
 
module.exports = mongoose.model("User", UserSchema);