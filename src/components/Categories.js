import { FlatList, StyleSheet } from "react-native";

import { Burger, Chicken, Coffee, Dimsum, Donut, Pizza } from '../assets/images/ExportAssets';
import CategoryItem from "./CategoryItem";
const categories = [
    {
      name: "Burger",
      image: Burger
    },
    {
      name: "Pizza",
      image: Pizza
    },
    {
      name: "Dimsum",
      image: Dimsum
    },
    {
      name: "Coffee",
      image: Coffee
    },
    {
      name: "Donut",
      image: Donut
    },
    {
      name: "Chicken",
      image:Chicken
    }
  ]
export const Categories = ({selectedCategory,setSelectedCategory})=>{
    return <FlatList
    data={categories} 
    renderItem={({item , index})=>{ 
      return <CategoryItem 
                index={index}  
                name={item.name} 
                image={item.image} 
                isSelected = {item.name === selectedCategory}
                setCategory ={()=>setSelectedCategory(item.name)}
              />
      }}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(category)=> category.name}
  />
} 

const styles = StyleSheet.create({
   
  });