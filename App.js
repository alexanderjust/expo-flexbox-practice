import React from "react";
import { View, Text } from "react-native";

function App() {
  return (
    <View style={{ 
      padding: 50,
      flexDirection: 'row',
      width: '80%',
      height: 300 ,
      justifyContent:'space-around',
      alignItems:'stretch'
      }}>
      <View
        style={{
          backgroundColor: "red",
          justifyContent:'center',
          alignItems:'center',
          flex: 1
        }}
      >
        <Text>Text 1</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          justifyContent:'center',
          alignItems:'center',
          flex: 1,
        }}
      >
        <Text>Text 2</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          justifyContent:'center',
          alignItems:'center',
          flex: 1
        }}
      >
        <Text>Text 3</Text>
      </View>
    </View>
  );
}

export default App;
