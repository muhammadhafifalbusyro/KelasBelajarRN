import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Data default
  const usernameDefault = 'hafif';
  const passwordDefault = 'hafif1999';

  const login = () => {
    if (username == usernameDefault && password == passwordDefault) {
      alert('Login success');
    } else {
      alert('Username atau password salah');
    }
  };
  return (
    <View style={style.container}>
      {/* Header */}
      <View style={style.header}>
        <Text style={style.titleHeader}>Login Page</Text>
      </View>
      {/* Username Input */}
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Username"
        placeholderTextColor={'grey'}
        style={style.input}
      />
      {/* password Input */}
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        placeholderTextColor={'grey'}
        style={style.input}
        secureTextEntry={true}
      />
      {/* Button Login */}
      <Button title="Login" onPress={() => login()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // backgroundColor: 'blue',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    color: 'black',
    fontWeight: 'bold',
    // textDecorationLine: 'underline',
    // fontStyle: 'italic',
    fontSize: 20,
  },
  input: {
    height: 40,
    width: '100%',
    // backgroundColor: 'black',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    color: 'black',
  },
});

export default LoginPage;
