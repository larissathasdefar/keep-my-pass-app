import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../components/colors';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import Base from '../components/Base/Base';
import CreatePassMutation from '../relay/mutations/CreatePass';

const Add = ({
  navigation,
  service = '',
  login = '',
  password = '',
  mode = 'add',
}) => {
  const [serviceState, setService] = useState(service);
  const [loginState, setLogin] = useState(login);
  const [passwordState, setPassword] = useState(password);
  // TODO: Let reuse email already filed on other passwords
  // TODO: password field hide/show
  return (
    <Base>
      <Text style={styles.title}>
        {mode === 'add' ? 'Add a Password' : 'Edit the Password'}
      </Text>
      <Text style={styles.sectionDescription}>Service</Text>
      <TextInput
        placeholder="Service"
        value={serviceState}
        onChangeText={text => setService(text)}
      />
      <Text style={styles.sectionDescription}>Login</Text>
      <TextInput
        placeholder="Login"
        value={loginState}
        keyboardType="email-address"
        onChangeText={text => setLogin(text)}
      />
      <Text style={styles.sectionDescription}>Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={passwordState}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title={mode === 'add' ? 'Create' : 'Edit'}
        onPress={() => {
          CreatePassMutation.createPass({
            input: { website: serviceState, login: loginState, password: passwordState },
            onCompleted: () => navigation.navigate('Home'),
            onError: () => navigation.navigate('Login'),
          })
        }}
      />
    </Base>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
    marginBottom: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

export default Add;
