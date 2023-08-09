import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 6,
      }}
    >
      <Text
        style={{ fontSize: 18, paddingHorizontal: 18, textAlign: 'center' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, autem!
      </Text>
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
