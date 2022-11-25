import { Text, View , StyleSheet, TextInput} from "react-native"
import {FontAwesome} from "@expo/vector-icons"
import {elevation} from "../common/styles"
import { useState } from "react"
export const Search = ({setTerm})=>{
    const [input, setInput] = useState("")
    const handleEndEditing= ()=>{
        if(!input) return
        setTerm(input)
    }
    return(
        <View style={[styles.container,styles.elevation]} >
            <FontAwesome name="search" size={25} />
            <TextInput  
                onChangeText={(text)=>{setInput(text)}}
                style={styles.input}
                value={input}
                placeholder="Restaurants, food"
                onEndEditing={handleEndEditing}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginHorizontal: 25,
        flexDirection :"row",
        backgroundColor:"white",
        padding: 15,
        borderRadius: 40
    },
    input:{fontSize:20, marginLeft: 10},
    elevation
})