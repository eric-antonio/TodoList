import React from "react";
import { View , Text, StyleSheet, TouchableOpacity} from "react-native";


const Task = (props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>

                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text styles={styles.itemText}>{props.text}</Text>

                <View style={styles.circular}>

                </View>

            </View>
           
        </View>
    )
}
const styles = StyleSheet.create({

    item:{
        backgroundColor:'#FFF',
        marginBottom: 10,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor:'#55BCF6',
        opacity:0.5,
    },
    itemText:{},
    circular:{},

});
export default Task;