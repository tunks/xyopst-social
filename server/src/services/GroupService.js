const mongoose = require("mongoose");
const GroupModel = require("../models/Group");

 exports.findAllGroups= async () => {
    return await GroupModel.find().sort({'_id': -1});
  };
   
  exports.findAllGroupsByUser= async (userId) => {
    return await GroupModel.find().sort({'_id': -1});
  };

  
  exports.createGroup= async (group) => {
    console.log("Create group")
    return await GroupModel.create(group);
  };
 
  exports.getGroupById = async (groupId) => {
    return await GroupModel.findById(groupId);
  };
  