import * as React from 'react';
import { Button, View, Text, SafeAreaView,StyleSheet} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent:'center',
          }}>
          <Text
            style={Style.text}>
            Welcome to Media Player 
          </Text>
          <Button
            onPress={() => navigation.navigate('AudioPlayer')}
            title="Go to Audio Player"
          />
          <Button
            onPress={() => navigation.navigate('VideoPlayer')}
            title="Go to Video Player"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const Style=StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
  }
})

export default Home;