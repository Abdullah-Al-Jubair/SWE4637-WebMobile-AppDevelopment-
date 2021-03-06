import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { AntDesign, FontAwesome,  } from "@expo/vector-icons";
import { AuthContext } from "../providers/AuthProvider";


const CommentButton = (props) => {
  const [count, setCount] = useState(0);
  const [icon, setIcon] = useState(["like2"]);
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            type="outline"
            title={`Like (${count})`}
            icon={<AntDesign name={icon} size={24} color="darkblue" />}
            onPress={function () {
              if (icon== "like2") {
                setCount(count + 1);
                setIcon("like1")
              }
              else {
                setCount(count - 1);
                setIcon("like2");
              }
            }}
          />
          <Button
            type="outline"
            icon={<FontAwesome name="commenting-o" size={24} color="darkblue" />}
            title=" Comment"
            onPress={() => {
              props.navigateFunc();
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default CommentButton;