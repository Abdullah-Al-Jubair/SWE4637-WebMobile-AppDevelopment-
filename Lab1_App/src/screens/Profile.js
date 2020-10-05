import React from 'react';
import {Text,StyleSheet,View,Image,} from 'react-native';

const ProfileScreen = ()=>
{
    return(
        <View style={styles.viewStyle}>
        <Image source={require("./../../assets/profile_pic.jpg")} style={styles.profilePic} resizeMode="stretch"/>
        <Text style= {styles.TextStyle}>Name:    Abdullah Al Jubair</Text>
        <Text style= {styles.TextStyle}>Student ID:     170042030</Text>
        <Text style= {styles.TextStyle}>Room No:   Non Residential</Text>
        <Text style= {styles.TextStyle}>Email:   aljobair@iut-dhaka.edu</Text>
        </View> 
    );
}

const styles = StyleSheet.create(
    {
        viewStyle:{
            alignItems: "center",
        },

        profilePic:{
            height:200,
            width:200,
        },

    TextStyle: {
        
        fontSize:22,
        color: "purple",
        paddingTop: 20,
    },    

},
);

export default ProfileScreen;