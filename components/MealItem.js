import {View, Text, Pressable, Image,StyleSheet} from "react-native";
import { useNavigation} from '@react-navigation/native';
import MealDetails from "./MealDetails";



function MealItem({ id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealsDetail', {
            mealId: id,
        });
    }



    return(
        <View style={styles.mealsItem}>
        <Pressable android_ripple={ {color: '#ccc'}}
                   style={ ({pressed})=>
                       (pressed ? styles.buttonPressed: null)}
                     onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            </View>
           <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
            </View>
        </Pressable>
    </View>
    );
}
export default MealItem;
const styles = StyleSheet.create({
    mealsItem:{
margin:16,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'white',
        elevation:4,


    },
    image:{
        width:'100%',
        height:200,

    },
    buttonPressed:{
        opacity:0.5,

    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden',

    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,

    },


});