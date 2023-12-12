import { Result } from "../../interface/LocationInterface"
import {View, Text} from 'react-native'
import { styles1 } from "../../theme/Styles";
interface locacion{
    loc:Result;
    
}

export const Location = ({loc}:locacion) => {
    const lñ=loc.name
    const dim= loc.dimension
  return (

<View style={styles1.container}>
    <Text style={{padding:10, color: 'black', fontWeight:'bold', fontSize: 20}}>Nombre: {lñ}</Text>
    <Text style={{color:'black'}}>Domension: {dim}</Text>
</View>
    )
}
