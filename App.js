import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ScrollViewBase,
} from 'react-native';
const logoImage = require('./assets/adaptive-icon.png');

export default function App() {
  return (
    // Note: consider using FlatList for lazy load
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          rowGap: 40,
          paddingHorizontal: 50,
          paddingVertical: 100,
        }}
      >
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        <Text
          style={{ fontSize: 18, paddingHorizontal: 18, textAlign: 'center' }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          incidunt consequuntur a corrupti distinctio quo fuga ipsam
          consectetur! Enim, provident.
        </Text>
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={{ width: 300, height: 300 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
