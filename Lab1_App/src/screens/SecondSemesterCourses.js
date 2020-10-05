import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const SecondSemesterScreen = ()=>
{
    const secondSemesterCourses =
    [
        {id:"Math 4241", key:"1", name:"Integral Calculus and Differential Equation",},
        {id:"CSE 4203", key:"2", name:"Discrete Mathematics",},
        {id:"SWE 4201", key:"3", name:"Object Oriented Programming -1"},
        {id:"CSE 4205", key:"4",name:"Digital Logic Design",},   
        {id:"Hum 4247", key:"5", name:"Accounting",},
        {id:"Hum 4249", key:"6", name:"Business Psychology and Communication",},
        {id:"SWE 4202", key:"7", name:"Object Oriented Programming -1 Lab"},
        {id:"CSE 4206", key:"8",name:"Digital Logic Design Lab",},

    ];

    return(
        <View style={styles.viewStyle}>
            <Text style= {styles.semesterTextStyle}>Second Semester</Text>
            <FlatList
                data={secondSemesterCourses}
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
            color: "navy",
            paddingBottom: 10,
        },

        textStyle:{
            fontSize:19,
            marginVertical:10,
            color:"teal"
        },

        viewStyle:{
            alignItems:"center",
            margin: 20,
        },
    },
);

export default SecondSemesterScreen;