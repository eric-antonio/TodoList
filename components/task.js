import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";


const Task = (props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>

                <TouchableOpacity style={styles.square}>

                    <Text styles={styles.itemText}>{props.text}</Text>

                </TouchableOpacity>

                <View style={styles.circular}>

                </View>

            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({

    item:{
        backgroundColor:'#FFF',
        margin: 3,
        padding: 15,
        borderRadius: 10,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'warp',
    },
    square:{ 
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity:0.4,
    },
    itemText:{},
    circular:{},

});
export default Task;