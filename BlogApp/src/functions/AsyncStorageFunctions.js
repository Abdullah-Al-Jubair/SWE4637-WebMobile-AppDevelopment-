import { AsyncStorage } from "react-native";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    //alert("Data Stored Successfully!");
  } catch (error) {
    alert(error);
  }
};


const storeDataJSON = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    //alert("Data Stored Successfully!");
  } catch (error) {
    alert(error);
  }
};



const getData = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      return data;
    } else {
      alert("No data with this key!");
    }
  } catch (error) {
    alert(error);
  }
};


const getDataJSON = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonData = JSON.parse(data);
      return jsonData;
    } else {
      alert("No available data under this key! Make sure you enter correct info or Sign-Up First.");
    }
  } catch (error) {
    alert(error);
  }
};



const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Data Removed Successfully");
  } catch (error) {
    alert(error);
  }
};



const removeProfile = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Account Profile Deleted.");
  } catch (error) {
    alert(error);
  }
};




const removePost = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    alert("Post Removed Successfully.");
  } catch (error) {
    alert(error);
  }
};




const getAllData = async () => {
  let inputData = []
  try {
    inputData = await AsyncStorage.getAllKeys();
    if (inputData != null) {
      return inputData;
    } else {
      alert("No data under this key!");
    }
  } catch (error) {
    alert(error);
  }
};


const getPostsCollection = async () => {
  let keys = await getAllData();
  let postsCollection = [];
  try {
      if (keys != null) {
          for (let key of keys) {
              if (key.includes('post')) {
                  let post = await getDataJSON(key);
                  postsCollection.push(post);
              }
          }
          return postsCollection;
      }
  } catch (error) {
      alert(error);
  }
}


const getCommentsCollection = async () => {
  let keys = await getAllData();
  let commentsCollection = [];
  try {
      if (keys != null) {
          for (let key of keys) {
              if (key.includes('comment')) {
                  let comment = await getDataJSON(key);
                  commentsCollection.push(comment);
              }
          }
          return commentsCollection;
      }
  } catch (error) {
      alert(error);
  }
}

const loadSavePosts = async (name, postID, input) => {
  let currentPost = {
      name: name,
      postID: postID,
      post: input,
      likes: 0,
  };
  storeDataJSON(
      JSON.stringify(postID),
      JSON.stringify(currentPost)
  );

  alert("Post Saved Succesfully.")
  let UserData = await getDataJSON(JSON.stringify(postID));
  console.log(UserData);
}






const saveComment = async (postID, postAuthor, commentID, commenterName, input) => {

  let currentComment = {
      post: postID,
      reciever: postAuthor,
      commentId: commentID,
      commenter: commenterName,
      comment: input,
    };

    storeDataJSON(
      JSON.stringify(commentID),
      JSON.stringify(currentComment)
    );
    alert("Comment Saved Successfully.")
    let UserData = await getDataJSON(JSON.stringify(commentID));
    console.log(UserData);
}


export { storeData, storeDataJSON, getData, getDataJSON, removeData,getAllData,getPostsCollection,loadSavePosts,getCommentsCollection,saveComment, removeProfile,removePost };