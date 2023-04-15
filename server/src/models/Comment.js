const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
 console.log("Connect mongoose")
  await mongoose.connect('mongodb://127.0.0.1:27017/social_db');
}

const Schema = mongoose.Schema; 
const commentSchema = new Schema({
  content: String,
  userId: String,
  postId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
 
module.exports = mongoose.model("Comment", commentSchema);