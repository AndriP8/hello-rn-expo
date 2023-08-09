import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
const logoImage = require('./assets/adaptive-icon.png');

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
      <ImageBackground
        source={logoImage}
        style={{ height: '100%', width: '100%' }}
      >
        <Image source={logoImage} style={{ width: 200, height: 200 }} />
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={{ width: 200, height: 200 }}
        />
        <Text
          style={{ fontSize: 18, paddingHorizontal: 18, textAlign: 'center' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          autem!
        </Text>
        <View style={{ backgroundColor: 'black', height: 200, width: 200 }} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
