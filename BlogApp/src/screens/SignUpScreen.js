import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Card } from "react-native-elements";
import { Feather, AntDesign, Ionicons,FontAwesome5,Fontisto,MaterialCommunityIcons,Entypo,FontAwesome } from "@expo/vector-icons";
import { storeDataJSON } from "../functions/AsyncStorageFunctions";

const SignUpScreen = (props) => {
  const [Name, setName] = useState("");
  const [SID, setSID] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Date, setDOB] = useState("");
  const [Address, setAddress] = useState("");
  const [Works, setWorks] = useState("");

  return (
    <View style={styles.viewStyle}>
      <Card>
        <Card.Title>Welcome to MyBlog!</Card.Title>
        <Card.Divider />
        <Input
          leftIcon={<Feather name="user" size={18} color="black" />}
          placeholder="Name"
          onChangeText={function (currentInput) {
            setName(currentInput);
          }}
        />
        <Input
          leftIcon={<Ionicons name="ios-school" size={18} color="black" />}
          placeholder="Student ID"
          onChangeText={function (currentInput) {
            setSID(currentInput);
          }}
        />
        <Input
          leftIcon={<Entypo name="email" size={18} color="black" />}
          placeholder="E-mail Address"
          onChangeText={function (currentInput) {
            setEmail(currentInput);
          }}
        />

        <Input
          placeholder="Password"
          leftIcon={<FontAwesome5 name="key" size={18} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setPassword(currentInput);
          }}
        />


        <Input
          placeholder="Date of Birth"
          leftIcon={<Fontisto name="date" size={18} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setDOB(currentInput);
          }}
        />



        <Input
          placeholder="Address"
          leftIcon={<FontAwesome5 name="address-card" size={18} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setAddress(currentInput);
          }}
        />

        <Input
          placeholder="Works at"
          leftIcon={<MaterialCommunityIcons name="office" size={18} color="black" />}
          secureTextEntry={true}
          onChangeText={function (currentInput) {
            setWorks(currentInput);
          }}
        />  

        <Button
          icon={<FontAwesome name="sign-in" size={24} color="white" />}
          title="  Sign Up!"
          type="solid"
          onPress={function () {
            let currentUser = {
              name: Name,
              sid: SID,
              email: Email,
              password: Password,
              DOB: Date,
              address: Address,
              worksAt: Works,
              post:[]
            
            };
            storeDataJSON(Email, currentUser);
            props.navigation.navigate("SignIn");
          }}
        />
        <Button
          type="clear"
          icon={<AntDesign name="login" size={18} color="dodgerblue" />}
          title="  Already have an account?"
          onPress={function () {
            props.navigation.navigate("SignIn");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#991c22",
  },
});
export default SignUpScreen;