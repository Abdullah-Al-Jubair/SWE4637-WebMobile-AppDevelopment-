import React from 'react';
import {Text,StyleSheet,View,Image, Button, TouchableOpacity} from 'react-native';

const HomeScreen = (props)=>
{
    return(
        <View style={styles.viewStyle}>
        <Image source={require("./../../assets/iut_logo.png")} style={styles.iutLogoStyle} resizeMode="stretch"/>
        <Text style= {styles.departmentTextStyle}>Department of CSE</Text>
        <Text style= {styles.programmeTextStyle}>Programme : SWE</Text>
        <TouchableOpacity
            onPress={
            function()
            {
                props.navigation.navigate("Profile");
            }
        }>  
            <Text style= {styles.myProfileTextStyle}>My Profile</Text>
        </TouchableOpacity>
        
        
        <Text> </Text>

        <Button 
        color="midnightblue"
        title="Semester  Wise  Course  List"
        onPress= {
            function()
            {
                props.navigation.navigate("Semesters");
            }}  
        />

        <Text> </Text>

        <Button 
        color="darkslategrey"
        title="List of Faculty Member"
        onPress= {
            function()
            {
                props.navigation.navigate("Faculty List");
            }}             
        />

        </View>
    );
}

const styles = StyleSheet.create(
    {
        viewStyle:{
            alignItems: "center",
        },

        iutLogoStyle:{
            height:200,
            width:150,
        },

    departmentTextStyle: {
        
        fontSize:22,
        color: "darkcyan",
        paddingTop: 20,
    },

    programmeTextStyle: {
        
        fontSize:21,
        color: "darkcyan",
        paddingTop: 5,
        paddingBottom:20,
    },

    myProfileTextStyle: {
        fontSize: 17,
        color: "deepskyblue",
        borderColor: "black",
        borderWidth:2,
        padding: 10,
        backgroundColor:"black",
        paddingBottom: 8
        
    }, 

},
);

export default HomeScreen;