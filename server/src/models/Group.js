const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
 console.log("Connect mongoose")
  await mongoose.connect('mongodb://127.0.0.1:27017/social_db');
}

const Schema = mongoose.Schema; 
const groupSchema = new Schema({
  groupname: String,
  descritpion: String,
  userId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Group", groupSchema);