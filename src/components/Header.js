import { Text, View , StyleSheet} from "react-native"

export const Header = () =>{
    return (
        <View style={styles.container} >
            <Text style={styles.lightHeader}>
                Grab your
            </Text> 
            <Text style={styles.boldHeader}>
                delicious meal!
            </Text>   
    </View>     
    )
}

const styles = StyleSheet.create({
    container:{
    marginHorizontal:25,
    marginTop:10,
    },
    lightHeader:{
        fontSize:35,
    },
    boldHeader:{
        fontWeight:"900",
        fontSize:40,
    },
})