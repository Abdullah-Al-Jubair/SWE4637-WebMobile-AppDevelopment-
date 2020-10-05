import React from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';

const SemesterScreen = (props)=>
{
    return(
        <View style={styles.viewStyle}>

        <Text style= {styles.titleTextStyle}>Semesters</Text>
             
        <View style={styles.buttonViewStyle}>
             <Button 
                color="midnightblue"
                title="1st Semester"
                onPress= {
                function()
                    {
                    props.navigation.navigate("1st Semester Course List");
                }}  
              />
        </View>


        <View style={styles.buttonViewStyle}>
             <Button 
                color="teal"
                title="2nd Semester"
                onPress= {
                function()
                    {
                    props.navigation.navigate("2nd Semester Course List");
                }}  
              />
        </View>


        <View style={styles.buttonViewStyle}>
             <Button 
                color="firebrick"
                title="3rd Semester"
                onPress= {
                function()
                    {
                    props.navigation.navigate("3rd Semester Course List");
                }}  
              />
        </View>


        <View style={styles.buttonViewStyle}>
             <Button 
                color="purple"
                title="4th Semester"
                onPress= {
                function()
                    {
                    props.navigation.navigate("4th Semester Course List");
                }}  
              />
        </View>

        </View>
    );
}


const styles = StyleSheet.create
(
    {
    
        titleTextStyle: {
        
            fontSize:30,
            color: "darkcyan",
        },

        buttonViewStyle:{

            width:150,
            margin:20
        },


        viewStyle:{
            alignItems:"center",
            margin: 30
        },
    },
);

export default SemesterScreen;