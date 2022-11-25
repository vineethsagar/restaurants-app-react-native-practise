import { useState } from "react"
import { StatusBar, StyleSheet, View } from "react-native"
import { Categories } from "../components/Categories"
import { Header } from "../components/Header"
import { Restaurants } from "../components/Restaurants"
import { Search } from "../components/Search"

export const HomeScreen = ()=>{
  const [selectedCategory, setSelectedCategory] = useState("Burger")

    return(
        <View style={styles.container}>
      <Header />
      <Search setTerm = {setSelectedCategory} />
      {/* <CategoryItem name={"Burger"} image={Burger} /> */}
      <Categories selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>
      <StatusBar style="auto" />
      <Restaurants />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
   
      backgroundColor: 'rgb(253,253,253)',
    
    },
  });