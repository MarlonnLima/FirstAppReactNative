import { View, Image, Text } from 'react-native'
import styles from './estilos'
export default function Card() {
    return (
        <View style={styles.card}>
            <Image style={styles.img} source={{ uri: 'https://proxy.olhardigital.com.br/wp-content/uploads/2022/02/shutterstock_1334997731.jpg' }}></Image>
            <View style={styles.boxDescricao}>
                <Text style={styles.ator}>Samuel L. Jackson</Text>
                <Text>Ator e produtor norte-americano</Text>
            </View>
        </View>
    )
}