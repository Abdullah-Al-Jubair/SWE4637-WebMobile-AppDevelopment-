import React, { useState, useEffect,} from "react";
import { View, StyleSheet, FlatList, ImageBackground, AsyncStorage,Button } from "react-native";
import { Card } from "react-native-elements";
import { removePost, getPostsCollection, loadSavePosts } from "../functions/AsyncStorageFunctions";
import { AuthContext } from "../providers/AuthProvider";

import PostCard from "./../components/PostCard";
import HeaderHome from "./../components/Header";
import DataElementCard from "../components/DataElementCard";
import CommentButton from "./../components/CommentButton";


const HomeScreen = (props) => {

  const [posts, setPosts] = useState([]);
  const [postID, setpostID] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState([]);


  const loadAllPosts = async () => {
    setLoading(true);
    let response = await getPostsCollection();
    if (response != null) {
      setPosts(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAllPosts();
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
              <DataElementCard
                Text="What's On Your Mind ?"
                currentFunc={setInput}
                currentText={input}
                pressFunction={async () => {
                  setpostID(["post"+Math.floor(Math.random()*2555)]);
                  loadSavePosts(
                    auth.CurrentUser.name,
                    postID,
                    input
                  )
                }}
              />
            </Card>
            <FlatList
            data={posts}
            onRefresh={loadAllPosts}
            refreshing={loading}
            renderItem={function ({ item }) {
                let data = JSON.parse(item)
                return (
                  <View>
                    <Card>
                      <PostCard
                        author={data.name}
                        body={data.post}
                        
                      />
                      <Button title="Delete Post" type="outline" 
                      onPress=
                      {async() => {
                        await removePost(JSON.stringify(data.postID))}
                     }
                      />

                      <Card.Divider />

                      <CommentButton
                        postID={data.postID}
                        likes={data.likes}
                        navigateFunc={() => {
                          props.navigation.navigate("PostScreen", {
                          postId: data.postID,
                          });
                        }}
                      />

                    </Card>
                  </View>
                );
              }}
            />
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

export default HomeScreen;