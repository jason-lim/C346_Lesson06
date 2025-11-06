import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Item from './components/item';


function App() {
  return (
    <View >
        <Text>Animal Quiz 101</Text>
        <Item title = "Lion" image={require('./img/lion.jpg')}></Item>
        <Item title = "Elephant" image={require('./img/elephant.jpg')}></Item>
    </View>
  );
}



export default App;