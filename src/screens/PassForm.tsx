import React, {useState, Fragment} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../components/colors';
import TextInput from '../components/TextInput/TextInput';
import Button from '../components/Button/Button';
import Base from '../components/Base/Base';
import CreatePassMutation from '../relay/mutations/CreatePass';
import EditPassMutation from '../relay/mutations/EditPass';

const Form = ({navigation}) => {
  const pass = navigation.getParam('pass') || {};
  const editing = pass.id !== undefined;
  const [serviceState, setService] = useState(pass.website);
  const [loginState, setLogin] = useState(pass.login);
  const [passwordState, setPassword] = useState(pass.password);
  // TODO: Let reuse email already filed on other passwords
  // TODO: password field hide/show
  return (
    <Base>
      <Text style={styles.title}>
        {editing ? 'Edit Password' : 'Add a Password'}
      </Text>
      {
        editing
          ? (
            <Fragment>
              <Text style={styles.sectionDescription}>{`Service: ${serviceState}`}</Text>
              <Text style={styles.sectionDescription}>{`Login: ${loginState}`}</Text>
            </Fragment>
          )
          : (
            <Fragment>
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
            </Fragment>
        )
      }
      <Text style={styles.sectionDescription}>Password</Text>
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={passwordState}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title={editing ? 'Save' : 'Create'}
        onPress={() => {
          if (editing) {
            EditPassMutation.editPass({
              input: { id: pass.id, password: passwordState },
              onCompleted: () => navigation.navigate('Home'),
              onError: () => navigation.navigate('Login'),
            });
          } else {
            CreatePassMutation.createPass({
              input: { website: serviceState, login: loginState, password: passwordState },
              onCompleted: () => navigation.navigate('Home'),
              onError: () => navigation.navigate('Login'),
            });
          }
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

export default Form;
