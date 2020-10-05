import React from 'react';
import {Text, ScrollView, StyleSheet, FlatList} from 'react-native';

const FourthSemesterScreen = ()=>
{
    const fourthSemesterCourses =
    [
        {id:"Math 4441", key:"1", name:"Statistics and Probability",},
        {id:"CSE 4403", key:"2", name:"Algorithm",},
        {id:"SWE 4401", key:"3", name:"Software Requirement and Specifications"},
        {id:"CSE 4409", key:"4",name:"DBMS 2",},   
        {id:"CSE 4411", key:"5", name:"Networking",},
        {id:"Hum 4441", key:"6", name:"Engineering Ethics",}, 
        {id:"CSE 4403", key:"7", name:"Algorithm Lab",},
        {id:"SWE 4401", key:"8", name:"Software Requirement and Specifications Lab"},
        {id:"CSE 4409", key:"9",name:"DBMS 2 Lab",},   
        {id:"CSE 4411", key:"10", name:"Networking Lab",}, 

    ];

    return(
        <ScrollView contentContainerStyle={styles.viewStyle}>
            <Text style= {styles.semesterTextStyle}>Fourth Semester</Text>
            <FlatList
                data={fourthSemesterCourses}
                renderItem={function({item})
                {
                return(<Text style={styles.textStyle}>{item.key}. {item.id} : {item.name}</Text>);
                }}
                
            />
            <Text>  </Text>
        </ScrollView>
    );
}


const styles = StyleSheet.create
(
    {
        semesterTextStyle: {
        
            fontSize:25,
            color: "darkcyan",
            paddingBottom: 10,
        },

        textStyle:{
            fontSize:19,
            marginVertical:10,
            color:"purple"
        },

        viewStyle:{
            alignItems:"center",
            margin: 20,
        },
    },
);

export default FourthSemesterScreen;