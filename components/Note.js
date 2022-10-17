import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Note = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white rounded-md items-center justify-center p-2 m-2 flex-wrap shadow-md"
      onPress={() => {
        navigation.navigate("ViewNote", { title: props.title });
        // console.log(props.title);
      }}
    >
      <Text>{props.title}</Text>
      <Image
        className="h-20 w-20"
        source={require("../assets/note_icon.png")}
      />
    </TouchableOpacity>
  );
};

export default Note;
