import React from "react";
import { View, Image } from "react-native";

const Splash = (props) => {
  setTimeout(() => {
    props.navigation.replace("Home");
  }, 3000);

  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <Image
        source={require("../assets/cavementech.png")}
        className="h-12 w-36 m-4"
      />
    </View>
  );
};

export default Splash;
