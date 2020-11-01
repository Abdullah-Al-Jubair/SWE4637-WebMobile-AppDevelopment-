import React, {useState,useEffect} from "react";
import {ScrollView, View, StyleSheet, FlatList,Button} from "react-native";
import {Card,Input} from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import PostCard from "./../components/PostCard";
import HeaderHome from "./../components/Header";
import CommentButton from "./../components/CommentButton";
import DataElementCard from "../components/DataElementCard";

import { AuthContext } from "../providers/AuthProvider";


import { storeDataJSON } from "../functions/AsyncStorageFunctions";
import { getDataJSON } from "../functions/AsyncStorageFunctions";



const HomeScreen = (props) => {
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
            <Input
                
                multiline
                placeholder="What's On Your Mind?"
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


        <ScrollView>
                <Card>
                    <PostCard author="Abdullah Al Jubair" body="The ending is nearer than you think, and it is already written.
                     All that we have left to choose is the correct moment to begin."/>
                    <Card.Divider />
                    <CommentButton
                        postId="1"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "1",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Harold Finch" body="I know what it's like to lose someone and to feel the need to disappear,
                     but trust me, you don't want to leave people behind."/>
                    <Card.Divider />
                    <CommentButton
                        postId="2"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "2",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="John Reese" body="I don't have any friends. I don't have any family left either.
                     I went around the world looking for bad guys. But there were plenty of you right here all along."/>
                    <Card.Divider />
                    <CommentButton
                        postId="3"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "3",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Sameen Shaw" body="There's a time for a scalpel and a time for a hammer. It's hammer time."/>
                    <Card.Divider />
                    <CommentButton
                        postId="4"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "4",
                            });
                        }}
                    />
                </Card>
                <Card>
                    <PostCard author="Carl Elias" body="I am the evolution of organized crime."/>
                    <Card.Divider />
                    <CommentButton
                        postId="5"
                        navigateFunc={() => {
                            props.navigation.navigate("PostScreen", {
                            postId: "5",
                            });
                        }}
                    />
                </Card>
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

export default HomeScreen;