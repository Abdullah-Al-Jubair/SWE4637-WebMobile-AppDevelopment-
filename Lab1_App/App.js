import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FacultyMemberScreen from "./src/screens/FacultyMemberScreen";
import SemesterScreen from "./src/screens/Semesters";
import FirstSemesterScreen from "./src/screens/FirstSemesterCourses";
import SecondSemesterScreen from "./src/screens/SecondSemesterCourses";
import ThirdSemesterScreen from "./src/screens/ThirdSemesterCourses";
import FourthSemesterScreen from "./src/screens/FourthSemesterCourses";
import ProfileScreen from "./src/screens/Profile";


const stack = createStackNavigator();

function App()
{
  return (
    <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen name= "Home" component= {HomeScreen}/>
          <stack.Screen name= "Faculty List" component= {FacultyMemberScreen}/>
          <stack.Screen name= "Semesters" component= {SemesterScreen}/>
          <stack.Screen name= "1st Semester Course List" component= {FirstSemesterScreen}/>
          <stack.Screen name= "2nd Semester Course List" component= {SecondSemesterScreen}/>
          <stack.Screen name= "3rd Semester Course List" component= {ThirdSemesterScreen}/>
          <stack.Screen name= "4th Semester Course List" component= {FourthSemesterScreen}/>
          <stack.Screen name= "Profile" component= {ProfileScreen}/>

        </stack.Navigator>
    </NavigationContainer>
);
}

export default App;