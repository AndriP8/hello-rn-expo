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
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
      <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
