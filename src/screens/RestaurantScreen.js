import { Text, View } from "react-native"

export const RestaurantScreen = ({navigation})=>{
    return<View>
        <Text>
            Screen Restaurants
        </Text>
        <Text>
            {navigation.getParam("name")}
        </Text>
    </View>
}