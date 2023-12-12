import React from 'react'
import {View, Text, FlatList} from 'react-native'
import { Result } from '../../interface/CapitulosInterface'
import { Capitulo } from './Capitulo';
interface Cap{
    cap:Result[];
    temp:string;
}
export const VerticalCapitulo = ({cap, temp}:Cap) => {
  return (
<View>
    <Text style={{textAlign:'center', color: 'blue', fontWeight:'bold', fontSize:40}}>{temp}</Text>
<FlatList
        data={cap}
        renderItem={({item}: any) => (
          <Capitulo capnum={item}  />
        )}
        keyExtractor={item => item.id.toString()}
        
      />
</View>  )
}
