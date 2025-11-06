import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

function Item({title, image}){
    return(
        <View>
            <Text>{title}</Text>
            <Image source={image} style={{width:300, height:300}}/>
        </View>
    );
};


export default Item;