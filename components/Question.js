import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Question = ({pic, ans1, ans2, ans3, onValueChange})=> {
    return (
        <View>
            <Image source={pic} style={{width:500, height:300}}/>
            <Text>What animal is this?</Text>
            <Picker onValueChange={onValueChange}>
                <Picker.Item label={ans1} value='1'/>
                <Picker.Item label={ans2} value='2'/>
                <Picker.Item label={ans3} value='3'/>
            </Picker>
        </View>
    );
};

export default Question;
