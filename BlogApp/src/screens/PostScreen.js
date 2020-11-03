import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import PostCard from "./../components/PostCard";
import { AuthContext } from "../providers/AuthProvider";
import { getDataJSON, getCommentsCollection, saveComment } from "../functions/AsyncStorageFunctions";
import HeaderHome from "./../components/Header";
import DataElementCard from "../components/DataElementCard";

const PostScreen = (props) => {
  const postID = props.route.params.postId;
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState([]);


  const loadSinglePost = async () => {
    let response = await getDataJSON(JSON.stringify(postID));
    if (response != null) {
      return response;
    }
  };

  const loadAllComments = async () => {
    setLoading(true);
    let response = await getCommentsCollection();
    if (response != null) {
      setComments(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadSinglePost().then((response) => {
      setPosts(JSON.parse(response));
    });
    loadAllComments();
  }, []);

    return (
      <AuthContext.Consumer>
        {(auth) => (
          <View style={styles.viewStyle}>
            <HeaderHome
              DrawerFunction={() => {
                props.navigation.toggleDrawer();
              }}
            />

            <Card>
              <Card.Title>Post</Card.Title>
              <PostCard
                author={posts.name}
                body={posts.post}
              />
            </Card>

            <ScrollView>
            <Card>
              <Card.Title>Comments</Card.Title>
              <FlatList
                data={comments}
                onRefresh={loadAllComments}
                refreshing={loading}
                renderItem={function ({ item }) {
                  let data = JSON.parse(item);
                  if (JSON.stringify(data.post) === JSON.stringify(postID)) {
                    return (
                      <View>
                          <PostCard
                            author={data.commenter}
                            body={data.comment}
                          />
                      </View>
                    );
                  }
                }
                }
              />
            </Card>

            <Card>
                <DataElementCard
                  Text="Share your comment!"
                  currentFunc={setInput}
                  currentText={input}
                  pressFunction={async () => {
                    saveComment(
                      postID,
                      posts.name,
                      auth.CurrentUser.name + Math.floor(Math.random()*2555),
                      auth.CurrentUser.name,
                      input)
                  }}
                />
            </Card>
            </ScrollView>
          </View>
        )}
      </AuthContext.Consumer>
    );
  

};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default PostScreen;


