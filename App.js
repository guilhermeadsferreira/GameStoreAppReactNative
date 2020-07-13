import React from "react";
import { View, StatusBar } from "react-native";
import Routes from "./routes";

const Main = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Routes />
    </>
  );
};

export default Main;
