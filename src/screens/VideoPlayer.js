import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Video from 'react-native-video';

const { width } = Dimensions.get('window');

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: false,
    };
  }

  render = () => {
    const {fullscreen} = this.state;
	return (
      <View style={styles.container}>
      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        
        <View style={fullscreen ? styles.fullscreenVideo : styles.video}>
          <Video
            fullscreen={fullscreen}
            ref={ref => this.video = ref}
            source={{uri:'https://static.videezy.com/system/resources/previews/000/017/354/original/waterfall.mp4'}}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode='cover'
            muted
            repeat
            controls
          />
        </View>

        <View style={fullscreen ? styles.fullscreenVideo : styles.video}>
          <Video
            fullscreen={fullscreen}
            ref={ref => this.video = ref}
            source={{uri:'https://static.videezy.com/system/resources/previews/000/042/126/original/Rabbit_0004.mp4'}}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode='cover'
            muted
            repeat
            controls
          />
        </View>

        <View style={fullscreen ? styles.fullscreenVideo : styles.video}>
          <Video
            fullscreen={fullscreen}
            ref={ref => this.video = ref}
            source={{uri:'https://static.videezy.com/system/resources/previews/000/045/645/original/200324_02_Home_mortgage.mp4'}}
            style={{ ...StyleSheet.absoluteFill }}
            resizeMode='cover'
            muted
            repeat
            controls
          />
          
        </View>
        </ScrollView>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    container: {
       flex: 1,
       
     },
     
     video: { width, height: width * .6, backgroundColor: 'white' },
     fullscreenVideo: {
       backgroundColor: 'black',
       ...StyleSheet.absoluteFill,
       elevation: 1,
     },
   });