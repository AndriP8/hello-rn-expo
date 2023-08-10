import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const logoImage = require('./assets/adaptive-icon.png');

export default function App() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return (
    // Note: consider using FlatList for lazy load
    <ScrollView>
      <StatusBar backgroundColor="gray" />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          rowGap: 40,
          paddingHorizontal: 50,
          paddingVertical: 20,
          marginVertical: 20,
        }}
      >
        <Image source={logoImage} style={{ width: 300, height: 300 }} />
        <ActivityIndicator size="large" color="deepskyblue" />
        <Button
          title="Press Me!"
          onPress={() => setIsModalVisible(true)}
          color="deepskyblue"
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          statusBarTranslucent
        >
          <View
            style={{
              backgroundColor: 'lightblue',
              flex: 1,
              padding: 60,
              rowGap: 20,
            }}
          >
            <Text>Modal content</Text>
            <Button
              title="Close"
              color="deepskyblue"
              onPress={() => setIsModalVisible(false)}
            />
            <Button
              title="Alert"
              color="deepskyblue"
              onPress={() =>
                Alert.alert('Alert!', 'Alert message!', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel pressed'),
                  },
                  {
                    text: 'Oke',
                    onPress: () => console.log('Oke pressed'),
                    style: 'cancel',
                  },
                ])
              }
            />
          </View>
        </Modal>
        <Text
          selectable
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
