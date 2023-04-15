const CommentModel = require("../models/Comment");
exports.findAllCommentsByPost= async (postId) => {
  console.log("Post id....... "+postId)
  const pipeline = [
     { $match: { "postId": postId } },
     { $sort: {"createdAt": -1}},
     { "$addFields": { "objUserId": { "$toObjectId": "$userId" }}},
     { $lookup:{ from: 'users', localField:'objUserId', foreignField:'_id',as:'users'}},
     { "$unwind": "$users" },
      { $group: { _id: "$_id",
                 userprofile: { $last: {id: "$users._id",
                                          firstname: "$users.profile.firstname", 
                                          lastname: "$users.profile.lastname"} 
                            },
                  comment: { $last : {id: "$_id",
                                          content: "$content", 
                                          postId: "$postId", 
                                          userId: "$userId",
                                          createdAt: "$createdAt"} }
                } 
      },
      {$project: {"userprofile": 1 , "comment": 1}}
  ];

     var result = await CommentModel.aggregate(pipeline)

    console.log("CommentsAgg results");
    console.log(result);

     if(result.length>0){
      result.forEach(rs=>{
        console.log(rs);
      });
     }
    return result;//await CommentModel.find({"postId": postId}).sort({'_id': -1});
};
   
exports.createComment = async (comment) => {
    console.log("Create comment")
    return await CommentModel.create(comment);
};

exports.getCommenById = async (id) => {
    return await CommentModel.findById(id);
};
   
exports.updateComment = async (id, comment) => {
    return await CommentModel.findByIdAndUpdate(id, comment);
};
   
exports.deleteComment = async (id) => {
    return await CommentModel.findByIdAndDelete(id);
};