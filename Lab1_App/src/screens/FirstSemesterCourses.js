import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const FirstSemesterScreen = ()=>
{
    const firstSemesterCourses =
    [
        {id:"Math 4141", key:"1", name:"Geometry and Differential Calculus",},
        {id:"CSE 4107", key:"2", name:"Strucutred Programming",},
        {id:"SWE 4101", key:"3", name:"Introduction to Software Engineering"},
        {id:"Phy 4141", key:"4",name:"Physics 2",},   
        {id:"Hum 4147", key:"5", name:"Technology, Environment and Society",},
        {id:"Hum 4145", key:"6", name:"Islamiat",}, 
        {id:"Phy 4142", key:"7", name:"Physics 2 Lab"},
        {id:"CSE 4108", key:"8",  name:"Strucutred Programming Lab",}, 

    ];

    return(
        <View style={styles.viewStyle}>
            <Text style= {styles.semesterTextStyle}>First Semester</Text>
                <FlatList
                    data={firstSemesterCourses}
                    renderItem={function({item})
                    {
                    return(<Text style={styles.textStyle}>{item.key}. {item.id} : {item.name}</Text>);
                    }}
                />
        </View>
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
            fontSize:18,
            marginVertical:10,
            color:"midnightblue"
        },

        viewStyle:{
            alignItems:"center",
            margin: 20,
        },
    },
);

export default FirstSemesterScreen;