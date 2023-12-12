import React from 'react'
import {View, Text} from 'react-native'
import { Result } from '../../interface/CapitulosInterface'
import { styles1 } from '../../theme/Styles'
interface cap{
    capnum: Result;
    
}
export const Capitulo = ({capnum, }:cap) => {
    const name= capnum.name
    const fL= capnum.air_date
    const Episodio = capnum.episode

  return (
<View style={styles1.container}>
    <Text style={{ color:'black', fontWeight:'bold', fontSize:25 }}>Nombre:</Text>
    <Text style={{ color:'black' }}>  {name}</Text>
    <Text style={{ color:'black', fontWeight:'bold', fontSize:25 }}>Fecha de lanzamiento:</Text>
    <Text style={{ color:'black' }}>  {fL}</Text>
    <Text style={{ color:'black' , fontWeight:'bold', fontSize:25 }}>Episodio:</Text>
    <Text style={{ color:'black' }}>  {Episodio}</Text>
</View>
    )
}
