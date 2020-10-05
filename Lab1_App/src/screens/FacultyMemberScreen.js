import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const FacultyMemberScreen = ()=>
{
    const facultyList =
    [
        {name:"Tasnim Ahmed", key:"1",},
        {name:"Mohayeminul Islam", key:"2",},
        {name:"Tajkia Rahamn Toma", key:"3",},
        {name:"Sohel Ahmed", key:"4",},
        {name:"Dr. Md. Abdul Hakim Khan", key:"5",},
        {name:"Ashraful Alam Khan", key:"6",},
        {name:"Dr. Fazlul Hasan Siddiqui", key:"7",},
        {name:"Lutfun Nahar Lota", key:"8",},       

    ];

    return(
        <View style={styles.viewStyle}>
            <Text style= {styles.semesterTextStyle}>Faculty Members</Text>
            <FlatList
                data={facultyList}
                renderItem={function({item}){
                return(<Text style={styles.textStyle}>{item.key}. {item.name}</Text>);
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
            fontSize:20,
            marginVertical:10,
            color:"darkblue"
        },

        viewStyle:{
            alignItems:"center",
            paddingVertical:10,
        },
    },
);

export default FacultyMemberScreen;