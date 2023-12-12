import React from 'react'
import {FlatList, Image, Text, View} from 'react-native'
import { Location } from './Location';
import { Result } from '../../interface/LocationInterface';
interface pe{
  pe: Result[];
  texto1:string
}
export const VerticalLocation = ({pe, texto1}:pe) => {
  return (
   <View>
    <Text style={{textAlign:'center', color: 'blue', fontWeight:'bold', fontSize:40}}>{texto1}</Text>

    <FlatList
        data={pe}
        renderItem={({item}: any) => (
          <Location loc={item}  />
        )}
        keyExtractor={item => item.id.toString()}
        
      />
   </View>
  )
}
