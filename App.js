import React, {useState} from 'react';
import {ScrollView, Text, TextInput, ToastAndroid, Button, Alert, View} from 'react-native';
import Question from "./components/Question";


const Quiz = ()=> {

    const [ans1, setAns1] = useState('0');
    const [ans2, setAns2] = useState('0');
    const [ans3, setAns3] = useState('0');
    const correct1 = "2";
    const correct2 = "1";
    const correct3 = "3";

  return (
      <View>
          <Text>Sample Quiz App</Text>
          <ScrollView>
            <Question pic={require('./img/elephant.jpg')}
                    ans1="Rhino" ans2="Elephant" ans3="Antelope"
                    onValueChange={(value) => setAns1(value)}/>

            <Question pic={require('./img/leopard.jpg')}
                    ans1="Leopard" ans2="Cheetah" ans3="Jaguar"
                    onValueChange={(value) => setAns2(value)}/>
            <Question pic={require('./img/kingfisher.jpg')}
                    ans1="Stork" ans2="Hummingbird" ans3="Kingfisher"
                    onValueChange={(value) => setAns3(value)}/>

            <Button
                title = "Submit Answers"
                onPress={()=>{
                      let score = 0;
                      if(ans1==correct1) {
                          score++
                      }
                      if(ans2==correct2) {
                          score++
                      }
                      if(ans3==correct3) {
                          score++
                      }
                      Alert.alert("You have "+score+" correct answers!");
                    }
                }>
            </Button>
          </ScrollView>
      </View>
  );
};

export default Quiz;
