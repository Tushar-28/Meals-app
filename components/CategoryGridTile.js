import {Pressable, View,Text,StyleSheet} from "react-native";

function CategoryGridTile({title,colour,onPress}){
return (
    <View style={styles.gridItem}>
           <Pressable  android_ripple={{color:'#ccc'}}
                       style={ ({pressed})=>
                           [styles.button,pressed ? styles.buttonPressed: null,
                           ]}
           onPress={onPress}
           >
                 <View style={[styles.innerContainer,{backgroundColor: colour}]}>
                   <Text style={styles.title}>{title}</Text>
                 </View>
           </Pressable>
       </View>
);
}

export default CategoryGridTile;
const styles= StyleSheet.create({

gridItem:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:8,
    elevation:4,
    backgroundColor:'white',
    shadowColor:'black',
    overflow:'hidden',
},
    innerContainer:{
    flex:1,
        padding:16,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:8,
    },
    button:{
    flex:1,

    },
    buttonPressed:{
    opacity:0.5,

    },
    title:{
    // fontFamily:'MyriadPro-semi-Bold',
    fontWeight:'bold',
        fontSize:18,
    },


});