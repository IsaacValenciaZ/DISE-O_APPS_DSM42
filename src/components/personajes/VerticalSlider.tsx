import React from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import { Result } from '../../interface/PersonaInterface'
import { CartItem } from './CartItem';
interface pe{
  pe: Result[];
}
export const VerticalSlider = ({pe}:pe) => {
  return (
   <View>
    

    <FlatList
        data={pe}
        renderItem={({item}: any) => (
          <CartItem person={item}  />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
   </View>
  )
}
