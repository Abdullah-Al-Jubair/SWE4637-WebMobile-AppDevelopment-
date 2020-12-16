import React, { useState } from "react";
import { View, StyleSheet, AsyncStorage,Image } from "react-native";
import { Text, Card, Button, Avatar } from "react-native-elements";
import { AuthContext } from "../providers/AuthProvider";
import HeaderHome from "./../components/Header";
import { removeProfile } from "../functions/AsyncStorageFunctions";
import { FontAwesome } from '@expo/vector-icons'; 


const ProfileScreen = (props) => {
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
      <View>
      <Image source={require("./../../assets/user.png")} style={styles.profilePic} resizeMode="contain"/>
      </View>
    </Card>

          <Card>
            <View>
            

              <Text style={{ alignSelf : 'center',fontWeight: "bold",fontSize: 30 }}>
                {auth.CurrentUser.name} 
              </Text>

              <Card.Divider/>
              <Text style = {styles.textStyle}>
              <Text style = {{fontWeight: "bold",color: "firebrick"}}>Student ID : </Text>{auth.CurrentUser.sid} {"\n"}
               <Text> {"\n"}</Text>
              <Text style = {{fontWeight: "bold",color: "firebrick",}}>Born on : </Text>{auth.CurrentUser.DOB} {"\n"}
              <Text> {"\n"}</Text>
              <Text style = {{fontWeight: "bold",color: "firebrick",}}>Address : </Text>{auth.CurrentUser.address} {"\n"}
              <Text> {"\n"}</Text>
              <Text style = {{fontWeight: "bold",color: "firebrick",}}>Works at : </Text>{auth.CurrentUser.worksAt} {"\n"}
              <Text> {"\n"}</Text>
              </Text>
            <Button
            icon = {<FontAwesome name="user-times" size={20} color="white" />}
            title = ' Delete Account'
            type = "solid"
            onPress={
                async function(){
                    await removeProfile(auth.CurrentUser.email);
                    auth.setIsLoggedIn(false);
                
                    
                }
            }
            />
            </View>
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    paddingHorizontal: 10,
    fontSize: 20,

  },

  profilePic: {
    height:100,
    width:100,
    alignSelf : "center"
},
  viewStyle: {
    flex: 1,
  },
});

export default ProfileScreen;