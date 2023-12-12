import {View, ScrollView, Button} from 'react-native'
import { VerticalCapitulo } from '../../components/capitulos/VerticalCapitulo'
import { useCapitulos } from '../../hooks/capitulos/useCapitulos'
import { useNavigation } from '@react-navigation/native';

export const PageCapitulos = () => {
    const {Temporada, Temporada2, Temporada3}=useCapitulos()
    const navigation =useNavigation();

  return (
<ScrollView>
<VerticalCapitulo cap={Temporada!} temp='Temporada 1'/>
<VerticalCapitulo cap={Temporada2!} temp='Temporada 2'/>
<VerticalCapitulo cap={Temporada3!} temp='Temporada 3'/>



</ScrollView>  )
}
