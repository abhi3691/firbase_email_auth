import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';

import auth from '@react-native-firebase/auth';
export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const signUp = () => {
    if (email && Password != '') {
      auth()
        .createUserWithEmailAndPassword(email, Password)
        .then(res => {
          console.log('response', res);
        })
        .catch(error => {
          console.log('error', error);
          Alert.alert(error.message);
        });
    } else {
      Alert.alert('Both fields are mandatory');
    }
  };

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, Password)
      .then(res => {
        console.log('response', res);
        setResult(res);
        navigation.navigate('Home', result);
      })
      .catch(error => {
        console.log('error', error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Emil"
        style={styles.input}
        value={email}
        onChangeText={setEmail}></TextInput>
      <TextInput
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}></TextInput>
      <View style={styles.Button}>
        <Button title="SignUp" onPress={signUp} />
        <Button title="Login" onPress={login} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    marginBottom: 20,
  },
  input: {
    width: 300,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6d69c3',
    marginVertical: 10,
    padding: 10,
  },
  Button: {
    width: 150,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
