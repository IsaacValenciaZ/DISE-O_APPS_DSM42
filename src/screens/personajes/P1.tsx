import React from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import { VerticalSlider } from '../../components/personajes/VerticalSlider'
import {UsePersonajes} from '../../hooks/personajes/UsePersonajes'
import { useNavigation } from '@react-navigation/native';

interface h{

}
export const P1 = () => {
  const {character, character2, character3, character4, character5, character6, character7, character8, character9, character10}=UsePersonajes()
  const navigation =useNavigation();

  return (
<ScrollView>
    <VerticalSlider pe={character!}/>
    <VerticalSlider pe={character2!}/>
    <VerticalSlider pe={character3!}/>
    <VerticalSlider pe={character4!}/>
    <VerticalSlider pe={character5!}/>
    <VerticalSlider pe={character6!}/>
    <VerticalSlider pe={character7!}/>
    <VerticalSlider pe={character8!}/>
    <VerticalSlider pe={character9!}/>
    <VerticalSlider pe={character10!}/>


    <Button title='ir a location'
    onPress={()=> navigation.navigate('PageLocation')}
    />

    
</ScrollView>
    )
}
