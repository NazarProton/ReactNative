import { Text, View, StyleSheet } from 'react-native';

const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default Navbar;
