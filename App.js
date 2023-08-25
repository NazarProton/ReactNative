import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import Navbar from './src/Navbar';

// const Post = styled.View`
//   padding: 15px;
//   border-bottom-width: 1px;
//   border-bottom-color: rgba(0, 0, 0, 0.1);
//   border-bottom-style: solid;
// `;
// const PostImage = styled.Image`
//   width: 100px;
//   height: 100px;
// `;
{
  /* <Post>
  <PostImage
    source={{
      uri: 'https://i.pinimg.com/originals/25/90/a1/2590a1a6759841581e6e1ed7fc91376d.jpg',
    }}
  />
  <StatusBar />
</Post> */
}
export default function App() {
  return (
    <View>
      <Navbar title="Card App" />
    </View>
  );
}
