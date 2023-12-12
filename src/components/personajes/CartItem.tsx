import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Result} from '../../interface/PersonaInterface';
import { styles1 } from '../../theme/Styles';
interface P {
  person: Result;
}
export const CartItem = ({person}: P) => {
  const i = person.image;
  const uri = person.image;
  const na=person.name
  return (
    <View style={styles1.container} >
      <View>
        <Image
          style={styles.ima}
          source={{
            uri,
          }}
        />
      </View>
      <View>
        <Text style={{color:'black'}}>{na}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ima: {
    height:100,
    width: 100,
  },
});
