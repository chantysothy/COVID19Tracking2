import React from 'react';
import {View,Button,Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Evaluate({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 30 }}>แบบทดสอบ</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Quiz')}>
            <Text style={{fontSize: 20 }}>ทำแบบทดสอบ</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: 350,
    marginTop: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#51DCA8',
    
  },
  text: {
    fontSize: 35,
    color: '#333333'
  }
});