import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Note from "../components/Note";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SearchBar from "../components/SearchBar";
const HomeScreen = (props ) => {
  const [notes, setNotes] = useState([]);
 
  useEffect(() => {
    // props.navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Home" }],
    // });
    loadAllKeysfromAsyncStorage();
    // console.log(`notes are ${notes}`);
  }, []);
  const loadAllKeysfromAsyncStorage = async () => {
    let keys = await AsyncStorage.getAllKeys();
    setNotes(keys);
    // console.log(keys);
  };

  return (
    <View className="flex-1 bg-white relative">
      <SearchBar></SearchBar>
      <ScrollView className="flex-1 shadow-lg">
        <View className="flex-row space-x-4 flex-wrap justify-around mt-2">
          {notes?.map((key) => {
            return <Note title={key} key={key}></Note>;
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        className="justify-end items-end"
        onPress={() => props.navigation.navigate("CreateNote")}
      >
        <Image
          className="h-20 w-20"
          source={require("../assets/plus_icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};


export default HomeScreen;
