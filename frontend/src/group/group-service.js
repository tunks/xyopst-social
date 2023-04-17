import axios from "axios";
const API_URL = "http://localhost:18080/api/v1/groups/";

class GroupService {
  getGroup(groupId, userId){
    console.log('Get post detail - postId: '+groupId +", userID: "+userId);
    return axios
      .get(API_URL + groupId, {
        params: {
          userId: userId
        }
      })
      .then(response => {
        console.log("Get post response..")
        console.log(response);
        return response.data;
      });
  }

  getAllGroups(userId){
    console.log("Get all groups - userID: "+userId);
    return axios
      .get(API_URL, {
        params: {
          userId: userId
        }
      })
      .then(response => {
        console.log("Get post response..")
        console.log(response);
        return response.data;
      });
  }

  createGroup(group) {
    console.log("Save post")
    console.log(group)
    return axios
      .post(API_URL, {
        groupname: group.groupname,
        description: group.description,
        userId: group.userId
      })
      .then(response => {
        console.log("Save group response..")
        console.log(response);
        return response.data;
      });
  }
  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GroupService()