import React from "react";
import { Header } from "react-native-elements";
import { AntDesign } from '@expo/vector-icons'; 

import { AuthContext } from "../providers/AuthProvider";
const HeaderHome = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: props.DrawerFunction,
          }}
          centerComponent={{ text: "BloggerHunt!", style: { color: "#fff" } }}
          rightComponent={{
            icon: "lock-outline",
            color: "#fff",
            onPress: function () {
              auth.setIsLoggedIn(false);
              auth.setCurrentUser({});
            },
          }}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default HeaderHome;