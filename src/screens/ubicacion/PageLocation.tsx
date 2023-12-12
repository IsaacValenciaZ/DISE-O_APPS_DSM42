import React from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import { Location } from '../../components/ubicacion/Location'
import { UseLocacion } from '../../hooks/ubicacion/useUbicacion'
import { VerticalLocation } from '../../components/ubicacion/VerticalLocation'
import { useNavigation } from '@react-navigation/native';


export const PageLocation = () => {
    const {Location, Location2, Location3, Location4, Location5,Location6, Location7}= UseLocacion();
    console.log(Location)
    const navigation =useNavigation();


  return (
    <ScrollView>
        <VerticalLocation pe={Location!} texto1='Pagina 1'/>
        <VerticalLocation pe={Location2!} texto1='Pagina 2'/>
        <VerticalLocation pe={Location3!} texto1='Pagina 3'/>
        <VerticalLocation pe={Location4!} texto1='Pagina4'/>
        <VerticalLocation pe={Location5!} texto1='Pagina 5'/>
        <VerticalLocation pe={Location6!} texto1='Pagina 6'/>
        <VerticalLocation pe={Location7!} texto1='Pagina 7'/>
        <Button  title='Ir a capitulos'
onPress={()=> navigation.navigate('PageCapitulos')}
/>

      
    </ScrollView>
  )
}
