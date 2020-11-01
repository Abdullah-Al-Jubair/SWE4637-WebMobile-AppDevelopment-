import React, {useState,useEffect} from "react";
import {ScrollView, View, StyleSheet, FlatList,Button,Text} from "react-native";
import {Card,Input} from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import PostCard from "./../components/PostCard";
import HeaderHome from "./../components/Header";
import CommentButton from "./../components/CommentButton";
import DataElementCard from "../components/DataElementCard";

import { AuthContext } from "../providers/AuthProvider";


import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";



const PostScreen = (props) => {
    const [posts, setPosts] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
  
    const [userpost,setuserpost]=useState([]);
    const [data, setData] = useState("");

    const loadPosts = async () => {
        setLoading(true);
        const response = await getPosts();
        if (response.ok) {
          //setPosts(response.data);
        }
      };

      useEffect(() => {
        loadPosts();
      }, []);

  const post =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

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
            <PostCard author="Abdullah Al Jubair" body="The ending is nearer than you think, and it is already written.
                     All that we have left to choose is the correct moment to begin."/>
            </Card>
            <ScrollView>
        <Card>
            <Input
                
                multiline
                placeholder="Write a comment"
                onChangeText={
                  function(currentInput){
                      setPosts(currentInput)
  
                  }
              }
                leftIcon={<Entypo name="pencil" size={20} color="darkblue" />}
              />
              

              <Button title="Post" type="outline" onPress={function () {
                let userPost={
                    user: auth.CurrentUser.Email,
                      post: posts,
                };
                setData({posts});
                auth.CurrentUser.post=posts;
                storeDataJSON(auth.CurrentUser.Email, auth.CurrentUser);
                console.log(auth.CurrentUser)
              }

            } />

            
        </Card>
       
            <FlatList
              data={posts}
              renderItem = {function ({ item }){
                return (
                  <PostCard
                    author={auth.CurrentUser.name}
                    title={item.title}
                    body={auth.CurrentUser.post}
                  />
                );
              }}
            />

        </ScrollView>
        </View>
      )}
    </AuthContext.Consumer>
  );
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "blue",
  },
  viewStyle: {
    flex: 1,
  },
});

export default PostScreen;