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

});
export default Task;