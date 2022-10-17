import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity,Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
// import { useNavigation } from "@react-navigation/native";

const ViewNote = (props) => {
  //   const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  //   console.log(props.route.params.title);

  useEffect(() => {
    loadNote();
  }, []);
  const loadNote = async () => {
    // console.log(typeof props.route.params.title);
    let value = await AsyncStorage.getItem(props.route.params.title);
    setDescription(value);
    setTitle(props.route.params.title);
    // console.log(title);
    // console.log(value);
  };

  const updateNote = async () => {

    if (title != "" && description != "") {
      try {
        let value = await AsyncStorage.getItem(title);

        await AsyncStorage.setItem(title, description);
 
        props.navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
        alert("Note Saved");
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("Please, Add some data");
    }
  };
  const onUpdate = () => {
    Alert.alert(
      'Are You Sure!',
      'This action will edit your note!',
      [
        {
          text: 'update',
          onPress: updateNote,
        },
        {
          text: 'No Thanks',
          onPress: () => console.log('no thanks'),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const deleteNote = async () => {
    // console.log(title);
    // console.log(description);

    try {
      await AsyncStorage.removeItem(title);
      // setTitle('')
      // setDescription('')
      // props.navigation.replace("Home");
      props.navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
      alert("Note Removed");
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = () => {
    Alert.alert(
      'Are You Sure!',
      'This action will delete your note permanently!',
      [
        {
          text: 'Delete',
          onPress: deleteNote,
        },
        {
          text: 'No Thanks',
          onPress: () => console.log('no thanks'),
        },
      ],
      {
        cancelable: true,
      }
    );
  };
  return (
    <View className="flex-1">
      <TextInput
        className="bg-white m-3 px-2 text-xl pb-2 h-12"
        placeholder="Title here"
        value={title}
        keyboardType="default"
        onChangeText={(t) => setTitle(t)}
      />
      <TextInput
        className="bg-white m-3 px-2 text-lg pb-2 h-44"
        placeholder="Description here"
        keyboardType="default"
        value={description}
        multiline={true}
        maxLength={200}
        onChangeText={(t) => setDescription(t)}
      />
      <View className="flex flex-row">
        <TouchableOpacity
          className="bg-slate-400 mx-7 p-2 items-center justify-center"
          onPress={() => onUpdate()}
        >
          <Text className="text-lg">Update Note </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className=" mx-7 p-2 bg-red-600 items-center justify-center"
          onPress={() => onDelete()}
        >
          <Text className="text-lg">Delete Note </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewNote;
