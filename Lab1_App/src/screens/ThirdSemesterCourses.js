import React from 'react';
import {Text, ScrollView, StyleSheet, FlatList} from 'react-native';

const ThirdSemesterScreen = ()=>
{
    const thirdSemesterCourses =
    [
        {id:"SWE 4301", key:"1", name:"Object Oriented Programming - 2",},
        {id:"CSE 4303", key:"2", name:"Data Structures",},
        {id:"CSE 4307", key:"3", name:"Database Management System"},
        {id:"Math 4341", key:"4",name:"Linear Algebra",},   
        {id:"CSE 4309", key:"5", name:"Theory of Computing",},
        {id:"CSE 4305", key:"6", name:"Computer Organization and Architecture",},
        {id:"SWE 4301", key:"7", name:"Object Oriented Programming - 2 Lab",},
        {id:"CSE 4307", key:"8", name:"Database Management System Lab"},
        {id:"CSE 4303", key:"9", name:"Data Structures Lab",},

    ];

    return(
        <ScrollView contentContainerStyle={styles.viewStyle}>
            <Text style= {styles.semesterTextStyle}>Third Semester</Text>
            <FlatList
                data={thirdSemesterCourses}
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
            color:"firebrick"
        },

        viewStyle:{
            alignItems:"center",
            margin: 20,
        },
    },
);

export default ThirdSemesterScreen;