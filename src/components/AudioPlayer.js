import React, { Component } from 'react';
import Player from '../components/Player';

export const TRACKS = [
  {
    title: 'We Dont Talk Anymore',
    artist: 'Charlie Puth',
    albumArtUrl: 'https://i.pinimg.com/originals/e3/c5/55/e3c55503141dfa4a0589939e90e8676a.jpg',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-26d5d.appspot.com/o/We_Dont_Talk_Anymore_(Ft._Selena_Gomez)_(Charlie_Puth)(www.englishsong.in).mp3?alt=media&token=ca884094-7662-40bd-be31-f734b8b6a3d2',
  },
  {
    title: 'See You Again',
    artist: 'Wiz Khalifa',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/0/08/Wiz_Khalifa_Feat._Charlie_Puth_-_See_You_Again_%28Official_Single_Cover%29.png',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-26d5d.appspot.com/o/See%20You%20Again%20Feat.%20Charlie%20Puth%20-%20(www.SongsLover.pk).mp3?alt=media&token=5b6e1137-fea7-474b-8642-39905a19c8c4',
  },
  {
    title: 'Let Me Love You',
    artist: 'DJ Snake',
    albumArtUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWsGpdpOrOgwmOrn-qEcC_PQjpVSxHx5kkeuJmEdxTVg&usqp=CAU&ec=45695923',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-26d5d.appspot.com/o/Let_Me_Love_You_(Ft._Justin_Bieber)_(DJ_Snake)(www.englishsong.in).mp3?alt=media&token=68b564fe-4bcf-4289-9743-a9d43950232e',
  },
  {
    title: '7 Years',
    artist: 'Lukas Graham',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/7-Years-by-Lukas-Graham.jpg',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-26d5d.appspot.com/o/7_Years_(Lukas_Graham)(www.englishsong.in).mp3?alt=media&token=5b600973-d2e2-47ed-a0a3-6c26ef758842',
  },
  {
    title: 'Beautiful',
    artist: 'Akon',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Beautiful_%28Akon_song%29.jpg',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/ecommerceapp-26d5d.appspot.com/o/02-Akon%20-%20Beautiful-%20SongsLover.com.mp3?alt=media&token=104a6fc8-3d90-46cd-93d3-12f75439c956',
  },
  
];

export default class AudioPlayer extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}