import { Text, View } from 'react-native';
const Greet = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{props.name}</Text>
    </View>
  );
};

export default Greet;
