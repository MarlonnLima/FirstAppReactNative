import {View, Text} from 'react-native'
import styles from './estilos'


export default function BarraTitulo() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ator Famoso</Text>
        </View>
    )
}