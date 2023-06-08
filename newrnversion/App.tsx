import React from "react";
import { Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

function App(): JSX.Element {
  return (
    <View>
      <Header />
      <Text style={{
        fontSize: 16,
        backgroundColor: "red",
        marginTop: 200,
        alignSelf: "center",
        textAlign: 'center',
        fontFamily: "BarlowCondensed-Regular",
      }}>
        番号を変更
      </Text>
    </View>
  );
}

export default App;
