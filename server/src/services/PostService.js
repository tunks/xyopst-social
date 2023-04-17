const mongoose = require("mongoose");
const PostModel = require("../models/Post");

 exports.findAllPosts= async () => {
    return await PostModel.find().sort({'_id': -1});
  };
   
  exports.findAllPostsByUser= async () => {
    return await PostModel.find().sort({'_id': -1});
  };

  exports.findAllUserFeedPosts = async(userId) =>{
    console.log("User id....... "+userId)
    const pipeline = [
      // { $match: { "userId": userId } }, //TODO 
       { "$addFields": { "objUserId": { "$toObjectId": "$userId" }}},
       { $lookup:{ from: 'users', localField:'objUserId', foreignField:'_id',as:'users'}},
       { "$unwind": "$users" },
        { $group: { _id: "$_id",
                   userprofile: { $last: {id: "$users._id",
                                          firstname: "$users.profile.firstname", 
                                          lastname: "$users.profile.lastname"} 
                              },
                    post: { $last : {id: "$_id",
                                    title: "$title", 
                                    content: "$content", 
                                    userId: "$userId",
                                    createdAt:  {"$toLong": "$createdAt"}
                                } }
                  } 
        },
        { $sort: {"createdAt": -1}},
        {$project: {"userprofile": 1 , "post": 1, createdAt: 1}}
    ];
  
       var result = await PostModel.aggregate(pipeline)
  
      console.log("UserPosts aggr results");
      console.log(result);
  
       if(result.length>0){
        result.forEach(rs=>{
          console.log(rs);
        });
       }
      return result;
  }
   
  exports.createPost = async (post) => {
    console.log("Create post")
    return await PostModel.create(post);
  };
 
  exports.getPostById = async (postId) => {
    const pipeline = [
         { $match: { "_id": new mongoose.Types.ObjectId(postId) } },
         { "$addFields": { "objUserId": { "$toObjectId": "$userId" }}},
         { $lookup:{ from: 'users', localField:'objUserId', foreignField:'_id',as:'users'}},
         { "$unwind": "$users" },
          { $group: { _id: "$_id",
                     userprofile: { $last: {id: "$users._id",
                                            firstname: "$users.profile.firstname", 
                                            lastname: "$users.profile.lastname"} 
                                },
                      post: { $last : {id: "$_id",
                                      title: "$title", 
                                      content: "$content", 
                                      userId: "$userId",
                                      createdAt:  {"$toLong": "$createdAt"}
                                  } }
                    } 
          },
          { $sort: {"createdAt": -1}},
          {$project: {"userprofile": 1 , "post": 1, createdAt: 1}}
      ];
    
    var result = await PostModel.aggregate(pipeline)
    //return await PostModel.findById(postId);
    return result;
  };
   
  exports.updatePost = async (id, post) => {
    return await PostModel.findByIdAndUpdate(id, post);
  };
   
  exports.deletePost = async (id) => {
    return await PostModel.findByIdAndDelete(id);
  };