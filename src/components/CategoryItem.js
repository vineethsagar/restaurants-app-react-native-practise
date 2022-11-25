import { StyleSheet, Text, View, Image, Button , TouchableOpacity } from "react-native"
import {elevation} from "../common/styles"
import {withNavigation} from "react-navigation"

const CategoryItem = ({name,image, index ,isSelected , setCategory, navigation})=>{
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Restaurant",{"name":name})
        }} >
        <View style={[styles.container,styles.elevation, isSelected ? {
        backgroundColor:"gold",

        }: {
        backgroundColor:"white",

        }]} >
            <View>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={styles.text} >
               {name}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 90,
        height: 90,
        borderRadius:30,
        marginVertical: 25,
        marginLeft: 20,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    elevation,
    image:{
        width:40,
        height: 40,
        // marginTop:5,
        // backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        // borderRadius: 5p
    },
    text:{
        fontWeight:"900"
    }
})

export default withNavigation(CategoryItem)